import { useRouter } from "next/router"

export default function  UserPage() {
  const router = useRouter();
  const segments = router.query.slug as string[];
  
  return(
    <div>
      <h2>User {segments?.join('/')}</h2>
    </div>
  )
}