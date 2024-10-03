"use client";
import React, { useState, ChangeEvent } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { predefinedHtml } from "./predefinedHTML";


export default function HTMLPreviewComponent() {
const [htmlCode,setHtmlCode]=useState<string>("")
const [previewHtml,setPreviewHtml]=useState<string>("")


const handlePreview=()=>{
    setPreviewHtml(htmlCode)
}

const handlePasteHtml=()=>{
    setHtmlCode(predefinedHtml)
}

const handleChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
    setHtmlCode(e.target.value)
}

const clear=()=>{
    setHtmlCode("")
    setPreviewHtml("")
}

    return(
        <>
        <div className="flex justify-center items-center h-screen ">
<div className="bg-card p-4 max-w-3xl w-full space-y-4 rounded-xl shadow-2xl">
<h1 className="font-bold text-3xl text-center">HMTL Previewer</h1>
<p className="text-gray-500 text-center ">Enter your HTML code and see the preview.</p>
<Textarea
onChange={handleChange}
value={htmlCode}
placeholder="Enter Your Html code here"
className="p-4 rounded-lg border border-input bg-background text-foreground "
rows={8}
/>
<div className="flex space-x-2 justify-center">
<Button className="rounded-2xl font-bold"
onClick={handlePreview}>Generate Preview</Button>
<Button className="rounded-2xl font-bold"
onClick={handlePasteHtml}>Paste Html</Button>
<Button className="rounded-2xl font-bold"
onClick={clear}>Clear</Button>
</div>
<div className="p-4 rounded-lg border border-input bg-background text-foreground ">
            <div dangerouslySetInnerHTML={{ __html: previewHtml }} />
          </div>
</div>
 </div>
        </>
    )
}
