### Creating a Separate README for the Modular TanStack Query Setup

Here’s how you can structure the project with a separate README for the modular TanStack Query setup. This secondary README will be referenced in the main `README.md` file.

### 1. **Create the Separate README**

First, create a new file named `README_QUERY_SETUP.md` in the root of your project. This file will contain the detailed documentation of the TanStack Query setup.

#### `README_QUERY_SETUP.md`

```markdown
# Modular TanStack Query Setup for Complex CRUD Operations

This document provides a detailed guide on setting up a modular system using TanStack Query (formerly React Query) to handle complex CRUD operations in a React application. The setup includes data caching, refetching, query validation, and error handling.

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Setting Up Query Client](#setting-up-query-client)
4. [Creating API Service](#creating-api-service)
5. [Centralizing API Endpoints](#centralizing-api-endpoints)
6. [Creating Query Hooks](#creating-query-hooks)
7. [Handling Errors](#handling-errors)
8. [Component Usage](#component-usage)
9. [Advanced Features](#advanced-features)
10. [Summary](#summary)

## Introduction

This documentation outlines the setup of a modular system using TanStack Query for handling complex CRUD operations. The setup includes data caching, refetching, query validation, and error handling.

## Installation

Install the required packages:

```bash
npm install @tanstack/react-query axios
```

## Setting Up Query Client

Set up a `QueryClient` in your application:

```javascript
// src/queryClient.js
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
    },
  },
});

export default queryClient;
```

Integrate the `QueryClient` with React:

```javascript
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './queryClient';
import App from './App';

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
);
```

## Creating API Service

Define an API service to handle HTTP requests:

```javascript
// src/apiService.js
import axios from 'axios';

export const fetchData = async (endpoint) => {
  const { data } = await apiClient.get(endpoint);
  return data;
};

export const createData = async (endpoint, newData) => {
  const { data } = await apiClient.post(endpoint, newData);
  return data;
};

export const updateData = async (endpoint, updatedData) => {
  const { data } = await apiClient.put(endpoint, updatedData);
  return data;
};

export const deleteData = async (endpoint) => {
  const { data } = await apiClient.delete(endpoint);
  return data;
};
```

## Centralizing API Endpoints

Centralize API endpoints in a single file:

```javascript
// src/apiEndpoints.js
const API_BASE_URL = 'https://api.example.com';

export const API_ENDPOINTS = {
  GET_ITEMS: `${API_BASE_URL}/items`,
  CREATE_ITEM: `${API_BASE_URL}/items`,
  UPDATE_ITEM: (id) => `${API_BASE_URL}/items/${id}`,
  DELETE_ITEM: (id) => `${API_BASE_URL}/items/${id}`,
};
```

## Creating Query Hooks


Create reusable hooks for CRUD operations:

### Fetch Hook

```javascript
// src/hooks/useFetchData.js
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../apiService';

export const useFetchData = (endpoint, queryKey) => {
  return useQuery([queryKey, endpoint], () => fetchData(endpoint), {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
    onError: (error) => {
      console.error(`Error fetching data for ${queryKey}:`, error);
      alert('An error occurred while fetching data.');
    },
  });
};
```

### Create Hook

```javascript

// src/hooks/useData.js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchData, postData, updateData } from '../config/api';
import { handleGenericError } from '../lib/utils/errorHandler';

export const useFetchData = (queryKey, endpoint) => {
  return useQuery([queryKey], () => fetchData(endpoint), {
    onError: (error) => {
      console.error(`Error fetching data from ${endpoint}: `, error);
    },
  });
};

export const useCreateData = (queryKey, endpoint) => {
  const queryClient = useQueryClient();
  return useMutation((data) => postData(endpoint, data), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKey]);
      console.log(`Data created successfully at ${endpoint}`);
    },
    onError: (e) => {
      const error = handleGenericError(e)
      return error;
    },
  });
};

export const useUpdateData = (queryKey, endpoint) => {
  const queryClient = useQueryClient();
  return useMutation((data) => updateData(endpoint, data), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKey]);
      console.log(`Data updated successfully at ${endpoint}`);
    },
    onError: (error) => {
      console.error(`Error updating data at ${endpoint}: `, error);
    },
  });
};


  export const useDeleteData = (endpoint, queryKey) => {
    const queryClient = useQueryClient();
  
    return useMutation(
      () => deleteData(endpoint),
      {
        onSuccess: () => {
          queryClient.invalidateQueries(queryKey);
        },
        onError: (e) => {
            const error = handleGenericError(e)
            return error
          },
      }
    );
  };
```

## Handling Errors

Error handling is integrated into the hooks with `onError` callbacks:

```javascript
// Example of onError usage in a mutation hook
onError: (error) => {
  console.error(`Error performing operation for ${queryKey}:`, error);
  alert('An error occurred while performing the operation.');
},
```

## Component Usage

Here’s how you can use these hooks in a component:

```javascript
// src/components/DataComponent.js
import React, { useState } from 'react';
import { useFetchData } from '../hooks/useFetchData';
import { useCreateData } from '../hooks/useCreateData';
import { useUpdateData } from '../hooks/useUpdateData';
import { useDeleteData } from '../hooks/useDeleteData';
import { API_ENDPOINTS } from '../apiEndpoints';

const DataComponent = () => {
  const [newData, setNewData] = useState('');
  const { data, isLoading, isError } = useFetchData(API_ENDPOINTS.GET_ITEMS, 'items');

  const createMutation = useCreateData(API_ENDPOINTS.CREATE_ITEM, 'items');
  const updateMutation = useUpdateData(API_ENDPOINTS.UPDATE_ITEM, 'items');
  const deleteMutation = useDeleteData(API_ENDPOINTS.DELETE_ITEM, 'items');

  const handleCreate = () => {
    createMutation.mutate({ name: newData });
  };

  const handleUpdate = (id) => {
    updateMutation.mutate({ id, name: 'Updated Name' });
  };

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  return (
    <div>
      <input
        type="text"
        value={newData}
        onChange={(e) => setNewData(e.target.value)}
        placeholder="Add new item"
      />
      <button onClick={handleCreate}>Add</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleUpdate(item.id)}>Update</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataComponent;
```

## Advanced Features

- **Pagination**: Implement pagination using `useInfiniteQuery` for large datasets.
- **Refetching**: Customize the refetching behavior using `refetchOnWindowFocus`, `staleTime`, and `cacheTime` options.

## Summary

This setup provides a robust foundation for managing server state in a React application using TanStack Query. It centralizes

