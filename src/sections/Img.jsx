export default function Img({ post }) {
  return (
    <div className="img">
      <img
        src={post.img}
        alt={post.alt}
        loading="lazy"
        style={{ objectPosition: post.focus }}
      />
    </div>
  )
}