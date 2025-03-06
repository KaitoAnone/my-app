"use client";
import Input from "@/app/components/material/input";
import { fetchActionApi } from "@/app/utils/action";
import { useState } from "react";
 
export default function Register() {
    const [ username, setUsername] = useState("");
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const [ confirmPassword, setConfirmPassword] = useState("");
    const register = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("รหัสผ่านไม่ตรงกัน")
            return;
        }
        let body = {
            username: username,
            email: email,
            password: password
        };
        const res = await fetchActionApi("/api/auth/local/register", {
            method: "POST",
            body: JSON.stringify(body)
        });
 
        if (res) {
            if (res.status !== 200) {
                console.log(res)
                alert("error")
            }
            console.log(res)
        }
    }
    return (
        <div>
            สมัครสมาชิก
            <form onSubmit={(e) => register(e)}>
                <Input 
                type={"username"} 
                id="username" 
                value={username} 
                label="username" 
                onChange={(e) => setUsername(e.target.value)}
                required
                />
                <Input 
                type={"email"} 
                id="email" 
                value={email} 
                label="email" 
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <Input 
                type={"password"} 
                id="password" 
                value={password} 
                label="รหัสผ่าน" 
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                <Input 
                type={"password"} 
                id="confirmPassword" 
                value={confirmPassword} 
                label="ยืนยันรหัสผ่าน" 
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                />
                <button
                type="submit"
                >submit</button>
            </form>
        </div>
    )
}