import React, { useState } from "react";
import { TProject } from "@/types";
import { uploadImageToCloudinary } from "@/utils/uploadToCloudinary";

interface ProjectFormProps {
  initialData?: TProject;
  onSubmit: (data: TProject) => void;
  isLoading: boolean;
}

const ProjectForm: React.FC<ProjectFormProps> = ({
  initialData,
  onSubmit,
  isLoading,
}) => {
  const [formData, setFormData] = useState<TProject>(
    initialData || {
      name: "",
      details: "",
      link: "",
      image: "",
    }
  );
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(
    initialData?.image || ""
  );
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      // Create a preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUploading(true);

    try {
      let imageUrl = formData.image;

      // Upload image if a new one is selected
      if (imageFile) {
        imageUrl = await uploadImageToCloudinary(imageFile);
      }

      onSubmit({
        ...formData,
        image: imageUrl,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit project. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Project Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
        />
      </div>

      <div>
        <label
          htmlFor="details"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Project Details
        </label>
        <textarea
          id="details"
          name="details"
          value={formData.details}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
        />
      </div>

      <div>
        <label
          htmlFor="link"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Project Link
        </label>
        <input
          type="url"
          id="link"
          name="link"
          value={formData.link}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
        />
      </div>

      <div>
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Project Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
        />
        {(imagePreview || formData.image) && (
          <div className="mt-2">
            <p className="text-sm text-gray-500 mb-1">Image Preview:</p>
            <div className="h-48 w-full relative">
              <img
                src={imagePreview || formData.image}
                alt="Preview"
                className="h-full w-auto object-cover rounded-md"
              />
            </div>
          </div>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={isLoading || isUploading}
          className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isLoading || isUploading
            ? "Processing..."
            : initialData
            ? "Update Project"
            : "Create Project"}
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
