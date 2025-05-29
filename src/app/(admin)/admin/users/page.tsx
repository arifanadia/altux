"use client";
import { UserTable } from "@/components/Users/UsersTable";
import { getAllUsers, updateUserRole } from "@/services/Auth";
import { Role, User } from "@/types";
import { Users } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Page() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (error) {
      toast.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const handleRoleChange = async (userId: string, newRole: Role) => {
    console.log("user ID is : ", userId);
    try {
      console.log("Updating role:", { userId, newRole });
      await updateUserRole(userId, newRole);
      setUsers(
        users.map((user) =>
          user._id === userId ? { ...user, role: newRole } : user
        )
      );
      toast.success("Role updated successfully");
    } catch (error) {
      console.error("Error in handleRoleChange:", error);
      toast.error("Failed to update role");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin text-gray-500">
          <Users className="w-8 h-8" />
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen mt-8">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white">User Management</h1>
            <p className="mt-2 text-sm text-white">
              Manage user roles and permissions
            </p>
          </div>
          <UserTable users={users} onRoleChange={handleRoleChange} />
        </div>
      </div>
    </div>
  );
}
