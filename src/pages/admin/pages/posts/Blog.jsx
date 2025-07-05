import { useEffect, useRef, useState } from "react";
import axios from "axios";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Paragraph from "@editorjs/paragraph";
import ImageTool from "@editorjs/image";
import Quote from "@editorjs/quote";
import CodeTool from "@editorjs/code";
import Embed from "@editorjs/embed";
import LinkTool from "@editorjs/link";
import { draftToMarkdown } from "markdown-draft-js";
import ReactMarkdown from "react-markdown";
import moment from "moment";

const categoriesList = [
  "Business",
  "Recent Release",
  "Culture",
  "Spotlight",
  "Scene",
  "Community",
  "Lifestyle",
  "Sports",
  "Documentary",
];

const POSTS_PER_PAGE = 4;

const Blog = () => {
  const editorInstance = useRef(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [displayImage, setDisplayImage] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [status, setStatus] = useState("Draft");
  const [posts, setPosts] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const [previewPost, setPreviewPost] = useState(null);
  const [editId, setEditId] = useState(null);
  const [page, setPage] = useState(1);

  const API_URL = "http://localhost:3000/api/blogs";

  const initEditor = () => {
    if (!editorInstance.current) {
      editorInstance.current = new EditorJS({
        holder: "editorjs",
        placeholder: "Input article contents here...",
        tools: {
          header: Header,
          list: List,
          paragraph: Paragraph,
          quote: Quote,
          code: CodeTool,
          embed: Embed,
          linkTool: {
            class: LinkTool,
            config: { endpoint: "http://localhost:3000/api/fetchUrl" },
          },
          image: {
            class: ImageTool,
            config: { endpoints: { byFile: "http://localhost:3000/api/upload" } },
          },
        },
        autofocus: true,
        onChange: autoSaveDraft,
      });
    }
  };

  useEffect(() => {
    initEditor();
    fetchPosts();
    const saved = localStorage.getItem("draftPost");
    if (saved) {
      const { title, category, displayImage, tags, status } = JSON.parse(saved);
      setTitle(title || "");
      setCategory(category || "");
      setDisplayImage(displayImage || "");
      setTags(tags || []);
      setStatus(status || "Draft");
    }
  }, []);

  const autoSaveDraft = () => {
    localStorage.setItem(
      "draftPost",
      JSON.stringify({ title, category, tags, displayImage, status })
    );
  };

  const fetchPosts = async () => {
    try {
      const res = await axios.get(API_URL);
      setPosts(res.data);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
    }
  };

  const cropImage = (imageDataURL) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    canvas.width = 300;
    canvas.height = 300;
    return new Promise((resolve) => {
      img.onload = () => {
        ctx.drawImage(img, 0, 0, 300, 300);
        resolve(canvas.toDataURL("image/jpeg"));
      };
      img.src = imageDataURL;
    });
  };

  const handleImageDrop = async (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = async () => {
      const cropped = await cropImage(reader.result);
      setDisplayImage(cropped);
    };
    reader.readAsDataURL(file);
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = async () => {
      const cropped = await cropImage(reader.result);
      setDisplayImage(cropped);
    };
    reader.readAsDataURL(file);
  };

  const handleTagAdd = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleTagRemove = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleSave = async () => {
    if (!title || !category || !displayImage) return alert("All fields are required");

    try {
      setIsSaving(true);
      const output = await editorInstance.current.save();
      const draftData = {
        blocks: output.blocks.map((block) => ({
          type: block.type,
          text:
            block.data.text ||
            block.data.caption ||
            block.data.items?.join("\n") ||
            block.data.code ||
            block.data.url ||
            block.data.embed ||
            "",
        })),
      };

      const markdown = draftToMarkdown(draftData);
      const firstParagraph = output.blocks.find((b) => b.type === "paragraph");
      const shortDescription = firstParagraph?.data.text?.slice(0, 200) || "No description";

      const postData = {
        title,
        category,
        tags,
        status,
        displayImage,
        content: markdown,
        description: shortDescription,
        timestamp: new Date().toISOString(),
      };

      let res;
      if (editId) {
        res = await axios.put(`${API_URL}/${editId}`, postData);
        setPosts(posts.map((p) => (p._id === editId ? res.data : p)));
        setEditId(null);
      } else {
        res = await axios.post(API_URL, postData);
        setPosts([res.data, ...posts]);
      }

      setTitle("");
      setCategory("");
      setTags([]);
      setTagInput("");
      setDisplayImage("");
      setStatus("Draft");
      editorInstance.current.clear();
      localStorage.removeItem("draftPost");
      alert("Post saved!");
    } catch {
      alert("Save error");
    } finally {
      setIsSaving(false);
    }
  };

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const paginatedPosts = posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <div className="bg-white mt-20 min-h-screen px-4 py-6 sm:px-2 overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Post Form */}
        <div className="bg-green-700 p-4 sm:p-3 border rounded-md" onDrop={handleImageDrop} onDragOver={(e) => e.preventDefault()}>
          <h2 className="text-lg sm:text-base font-bold text-white mb-3">Create or Edit Post</h2>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-full mb-2 p-2 text-sm border rounded" />
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full mb-2 p-2 text-sm border rounded bg-white">
            <option value="">Select Category</option>
            {categoriesList.map((cat) => <option key={cat}>{cat}</option>)}
          </select>
          <input type="file" accept="image/*" onChange={handleImageChange} className="mb-2 text-white text-sm" />
          {displayImage && <img src={displayImage} className="w-24 h-24 sm:w-20 sm:h-20 rounded object-cover mb-2" />}

          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <input value={tagInput} onChange={(e) => setTagInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleTagAdd()} placeholder="Add tag" className="flex-1 p-2 text-sm border rounded" />
            <button onClick={handleTagAdd} className="bg-red-500 text-white px-3 py-1 text-sm rounded">Add</button>
          </div>
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag) => (
              <span key={tag} className="bg-green-200 px-2 py-1 rounded-full text-xs">
                {tag} <button onClick={() => handleTagRemove(tag)} className="ml-1 text-red-600">×</button>
              </span>
            ))}
          </div>

          <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full mb-2 p-2 text-sm border rounded bg-white">
            <option>Draft</option>
            <option>Published</option>
          </select>

          <div id="editorjs" className="border bg-white p-3 rounded min-h-[250px] mb-3" />
          <button onClick={handleSave} className="bg-red-500 text-white w-full py-2 text-sm rounded">
            {editId ? "Update Post" : isSaving ? "Saving..." : "Publish Post"}
          </button>
        </div>

        {/* Post List */}
        <div>
          <h2 className="text-lg sm:text-base font-bold mb-4 text-green-700">Blog Posts</h2>
          <div className="space-y-4">
            {paginatedPosts.map((post) => (
              <div key={post._id} className="p-3 border rounded-lg">
                <img src={post.displayImage} className="w-full h-36 sm:h-28 object-cover rounded mb-2" />
                <h3 className="font-semibold text-base sm:text-sm text-green-700">{post.title}</h3>
                <p className="text-xs text-gray-500">
                  {post.category} • {moment(post.timestamp).fromNow()} •
                  <span className={`font-semibold ml-1 ${post.status === 'Published' ? 'text-green-700' : 'text-yellow-600'}`}>{post.status}</span>
                </p>
                <p className="text-sm sm:text-xs text-gray-700 mt-1">{post.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {[...Array(totalPages)].map((_, i) => (
              <button key={i} onClick={() => setPage(i + 1)} className={`px-3 py-1 text-sm rounded ${page === i + 1 ? 'bg-green-600 text-white' : 'bg-white border'}`}>
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {previewPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto p-4 rounded-lg relative">
            <button onClick={() => setPreviewPost(null)} className="absolute top-2 right-2 text-xl text-red-600">×</button>
            <img src={previewPost.displayImage} className="w-full h-64 object-cover rounded mb-4" />
            <h3 className="text-2xl font-bold text-green-800 mb-1">{previewPost.title}</h3>
            <p className="text-sm text-gray-500 mb-3">{previewPost.category} • {moment(previewPost.timestamp).fromNow()}</p>
            <ReactMarkdown className="prose max-w-none">{previewPost.content}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
