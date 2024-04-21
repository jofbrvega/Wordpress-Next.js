import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl flex">
      <figure className="w-1/2">
          <img
            className={"object-cover w-full min-h-[300px] aspect-square"}
            src={coverImage.node.sourceUrl}
            alt={title}
            title="{title}"
          />
      </figure>
      <div className="card-body w-1/2 flex flex-col justify-evenly">
        <h2
          className="card-title"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h2>
        <div
          className="text-lg leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        <div className="card-actions justify-end">
          <Link href={`/posts/${slug}`} className="btn btn-primary">
            {" "}
            Read More{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
