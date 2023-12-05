"use client";

import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabaseUrl = "https://pirvfneufewytapjloam.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpcnZmbmV1ZmV3eXRhcGpsb2FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3NTU1MDIsImV4cCI6MjAxNzMzMTUwMn0.t3EpwY9lcYa-E92PaRgOhRDfzdzeM4NqIRa0KKn0xhM";
const supabase = createClient(supabaseUrl, supabaseKey);
// import supabase from "../config/supabaseClient";
type UserTypes = {
  name: string;
  clicks: number;
};
export default function Users() {
  const [users, setFetchUsers] = useState<any | null>(null);
  const [errors, setErrors] = useState<any | null>(null);
  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from("users").select();
      if (data) {
        console.log(data, "data");
        setFetchUsers(data);
      }
      if (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  console.log(users ? users.map((user: any) => user.name) : null, "users");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>USERS</h1>
      {errors && <p>{errors}</p>}
      {users && (
        <div>
          {users.map((user: any, id: number) => (
            <p key={id}>{user.name}</p>
          ))}
        </div>
      )}
    </main>
  );
}
