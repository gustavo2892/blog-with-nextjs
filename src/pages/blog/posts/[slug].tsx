import { useRouter } from "next/router"

export default function  PostsPage() {
  const router = useRouter();

  return(
    <div>
      <h2>Post {router.query.slug}</h2>
    </div>
  )
}