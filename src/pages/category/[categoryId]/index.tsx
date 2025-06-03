import { useRouter } from "next/router"

export default function  CategoryIdPage() {
  const router = useRouter();

  return(
    <div>
      <h2>CategoryId {router?.query?.categoryId}</h2>
    </div>
  )
}