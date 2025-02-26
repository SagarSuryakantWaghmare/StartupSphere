import React from "react";
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    views,
    author: { _id: authorId, name },
    title,
    category,
    _id,
    image,
    description,
  } = post;

  return (
    <li className="startup-card group">
      {/* Date and Views */}
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      {/* Author and Title */}
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>

        {/* Author Image */}
        <Link href={`/user/${authorId}`}>
          <Image
            src={image || "https://via.placeholder.com/48"} // Fix placeholder URL
            alt={name}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
        </Link>
      </div>

      {/* Description and Startup Image */}
      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>
        <Image
          src={image || "https://via.placeholder.com/300"} // Fix startup image
          alt={title}
          width={300}
          height={200}
          className="startup-card_img object-cover"
        />
      </Link>

      {/* Category and Details Button */}
      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase() || "uncategorized"}`}>
          <p className="text-16-medium">{category || "Uncategorized"}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
