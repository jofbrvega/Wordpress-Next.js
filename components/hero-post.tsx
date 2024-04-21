import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import exp from "constants";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <Link href={`/posts/${slug}`} className="card w-full h-full glass">
      <figure>
        <img
          className={"w-full object-cover"}
          src={coverImage.node.sourceUrl}
          alt={title}
          title="{title}"
        />
      </figure>
      <div className="card-body">
        <div className={'flex justify-between'}>
          <div>
            <h2 className="card-title">{title}</h2>
            <span className="mb-4 md:mb-0 text-lg">
              <Date dateString={date} />
            </span>
          </div>
          <Avatar author={author} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: excerpt}}></div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" href={`/posts/${slug}`}>
            Learn now!
          </button>
        </div>
      </div>
    </Link>
  );
}
