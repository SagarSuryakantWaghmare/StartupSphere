"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "./ui/button";
import { Send } from "react-feather";;
const StartupForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState<string>("Briefly describe your idea and what problem it solves");
  const isPending=false;
  return (
    <>
    {/* 
    The form may be be presented to create the startup and then store in the sanity and we have to retrive for the 
    that to  get the idea about how the total info about the overall project of the startup 
    it will retrive all the info form the sanity
    There is small error which may be give some conflict in the retrive and this must be a unique one's
    Title and other content should be store and retrive form the sanity
     */}
      <form action={() => {}} className="startup-form">
        <div>
          <label htmlFor="title" className="startup-form_label">
            Title
          </label>
          <Input
            id="title"
            name="title"
            className="startup-form_input"
            required
            placeholder="Startup Title"
          />
          {errors.title && <p className="startup-form_error">{errors.title}</p>}
        </div>

        <div>
          <label htmlFor="description" className="startup-form_label">
            Description
          </label>
          <Textarea
            id="description"
            name="description"
            className="startup-form_textarea"
            required
            placeholder="Briefly describe your idea and what problem it solves"
          />
          {errors.description && (
            <p className="startup-form_error">{errors.description}</p>
          )}
        </div>

        <div>
          <label htmlFor="category" className="startup-form_label">
            Category
          </label>
          <Input
            id="category"
            name="category"
            className="startup-form_input"
            required
            placeholder="Startup Category (Tech, Health, Education..)"
          />
          {errors.category && (
            <p className="startup-form_error">{errors.category}</p>
          )}
        </div>

        <div>
          <label htmlFor="link" className="startup-form_label">
            Image URL
          </label>
          <Input
            id="link"
            name="link"
            className="startup-form_input"
            required
            placeholder="Startup Image URL"
            style={{ borderRadius: 20, overflow: "hidden" }}
          />
          {errors.link && <p className="startup-form_error">{errors.link}</p>}
        </div>

        <div data-color-mode="light">
          <label htmlFor="pitch" className="startup-form_label">
            Pitch
          </label>
          <MDEditor
            value={pitch}
            onChange={(value) => setPitch(value as string)}
            className="startup-form_textarea"
            id="pitch"
            preview="edit"
            textareaProps={{
              placeholder:"Briefly Describe your idea and what problem it solves",
            }}
          />
          {errors.pitch && <p className="startup-form_error">{errors.pitch}</p>}
        </div>
        <Button type="submit" className="startup-form_btn "
        disabled={isPending}>
         {isPending ? "Submitting..." : "Submit Your Pitch"}
         <Send className="size-6 ml-2"/>
        </Button>
      </form>
    </>
  );
};

export default StartupForm;
