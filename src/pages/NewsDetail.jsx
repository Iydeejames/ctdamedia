import { useParams } from "react-router-dom";
import { allPosts } from "../data/allPosts";

export default function NewsDetail() {
  const { slug } = useParams();
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="p-4 text-center text-red-600">Post not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* 🖼 Featured Image */}
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover rounded mb-6"
      />

      {/* 📰 Title and Date */}
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{post.date}</p>

      {/* 📄 Description */}
      {post.shortDescription && (
        <p className="text-gray-700 text-base mb-6">{post.shortDescription}</p>
      )}

      {/* 📝 Main Content */}
      <div className="prose max-w-none prose-lg text-gray-900 leading-relaxed">
        {typeof post.content === "string" ? (
          <p>{post.content}</p>
        ) : (
          post.content?.map((paragraph, index) => <p key={index}>{paragraph}</p>)
        )}
      </div>

      {/* 🎬 Extra Media */}
      {post.extraMedia?.length > 0 && (
        <div className="space-y-6 mt-10">
          {post.extraMedia.map((media, index) => {
            if (media.type === "image") {
              return (
                <img
                  key={index}
                  src={media.src}
                  alt={`extra-${index}`}
                  className="w-full rounded-lg"
                />
              );
            }
            if (media.type === "video") {
              return (
                <div key={index} className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={media.src}
                    title={`video-${index}`}
                    className="w-full h-64 rounded"
                    allowFullScreen
                  ></iframe>
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
}
