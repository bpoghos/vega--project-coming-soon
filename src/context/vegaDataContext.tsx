import React, { createContext, useState, ReactNode, useEffect } from "react";
import { collection, getDocs, addDoc, doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { db, storage } from "../configs/firebase/firebase";
import { CategoryData, NewDataProps } from "../components/App/data";
import { deleteObject, ref } from "firebase/storage";

interface VegaDataContextProps {
  data: any; // Replace `any` with the appropriate type for your data
  setData: React.Dispatch<React.SetStateAction<any>>; // Replace `any` with the appropriate type
  fetchData: () => Promise<void>; // Method to fetch data from Firebase
  addPost: (newPost: any) => Promise<void>; // Method to add a new post to Firebase
  deletePost: (postId: string | number) => Promise<void>; // Method to delete a post from Firebase
  editPost: (updatedPost: NewDataProps) => Promise<void>; // Method to edit a post in Firebase
}

export const VegaDataContext = createContext<VegaDataContextProps | undefined>(undefined);

export const VegaDataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<any>(null); // Replace `any` with your initial data type

  // Method to fetch data from Firebase
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "vegaData")); // Ensure "vegaData" matches your Firestore collection name
      const fetchedData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(fetchedData);
    } catch (error) {
      console.error("Error fetching data from Firebase:", error);
    }
  };

  // Method to add a new post to Firebase
  const addPost = async (newPost: NewDataProps) => {
    try {
      if (!newPost.category) {
        throw new Error("Category is required to add a post.");
      }
  
      // Fetch all categories from Firestore
      const querySnapshot = await getDocs(collection(db, "vegaData"));
      const categories = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CategoryData[];
  
      // Find the category document by comparing the category ID
      const categoryDoc = categories.find((category) => category.name === newPost.category);
      if (!categoryDoc) {
        throw new Error(`Category "${newPost.category}" does not exist.`);
      }
  
      // Reference to the category document
      const categoryDocRef = doc(db, "vegaData", String(categoryDoc.id));
  
      // Update the projects array in the category document
      const updatedProjects = [...categoryDoc.projects, newPost];
      await updateDoc(categoryDocRef, { projects: updatedProjects });
  
      // Update the local state directly
      setData((prevData: CategoryData[]) =>
        prevData.map((category) =>
          category.id === categoryDoc.id
            ? { ...category, projects: updatedProjects }
            : category
        )
      );
  
      console.log("Post added successfully.");
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  const deletePost = async (postId: string | number) => {
    try {
      // Fetch all categories from Firestore
      const querySnapshot = await getDocs(collection(db, "vegaData"));
      const categories = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CategoryData[];
  
      // Find the category containing the post
      const categoryDoc = categories.find((category) =>
        category.projects.some((project) => project.id === postId)
      );
  
      if (!categoryDoc) {
        throw new Error(`Post with ID "${postId}" does not exist.`);
      }
  
      // Reference to the category document
      const categoryDocRef = doc(db, "vegaData", String(categoryDoc.id));
  
      // Find the post to delete
      const postToDelete = categoryDoc.projects.find((project) => project.id === postId);
  
      if (!postToDelete) {
        throw new Error(`Post with ID "${postId}" does not exist in the category.`);
      }
  
      // Delete profileImage from Firebase Storage
      if (postToDelete.profileImage) {
        const profileImageRef = ref(storage, postToDelete.profileImage);
        await deleteObject(profileImageRef);
        console.log(`Profile image deleted: ${postToDelete.profileImage}`);
      }
  
      // Delete multiple images from Firebase Storage
      if (postToDelete.multipleImages && postToDelete.multipleImages.length > 0) {
        for (const image of postToDelete.multipleImages) {
          const imageRef = ref(storage, image);
          await deleteObject(imageRef);
          console.log(`Image deleted: ${image}`);
        }
      }
  
      // Remove the post from the projects array
      const updatedProjects = categoryDoc.projects.filter((project) => project.id !== postId);
  
      // Update the category document with the new projects array
      await updateDoc(categoryDocRef, { projects: updatedProjects });
  
      console.log(`Post with ID "${postId}" deleted successfully.`);
      fetchData(); // Refresh the data after deleting the post
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const editPost = async (updatedPost: NewDataProps) => {
    try {
      if (!updatedPost.category) {
        throw new Error("Category is required to edit a post.");
      }
  
      console.log("Updated Post:", updatedPost); // Debugging log
  
      // Fetch all categories from Firestore
      const querySnapshot = await getDocs(collection(db, "vegaData"));
      const categories = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CategoryData[];
  
      // Find the category containing the post
      const categoryDoc = categories.find((category) =>
        category.projects.some((project) => project.id === updatedPost.id)
      );
  
      console.log("Category Document:", categoryDoc); // Debugging log
  
      if (!categoryDoc) {
        throw new Error(`Post with ID "${updatedPost.id}" does not exist.`);
      }
  
      // Reference to the category document
      const categoryDocRef = doc(db, "vegaData", String(categoryDoc.id));
  
      console.log("Category Document Reference:", categoryDocRef); // Debugging log
  
      // Update the post in the projects array
      const updatedProjects = categoryDoc.projects.map((project) =>
        project.id === updatedPost.id ? updatedPost : project
      );
  
      // Update the category document with the new projects array
      await updateDoc(categoryDocRef, { projects: updatedProjects });
  
      console.log(`Post with ID "${updatedPost.id}" updated successfully.`);
      fetchData(); // Refresh the data after editing the post
    } catch (error) {
      console.error("Error editing post:", error);
    }
  };


  // Optionally fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <VegaDataContext.Provider value={{ data, setData, fetchData, addPost, deletePost, editPost }}>
      {children}
    </VegaDataContext.Provider>
  );
};