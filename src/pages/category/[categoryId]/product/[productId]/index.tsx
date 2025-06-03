import { useRouter } from "next/router"

export default function  ProductIdPage() {
  const router = useRouter();

  return(
    <div>
      <h2>CategoryId {router?.query?.categoryId}</h2>
      <h2>ProductId {router?.query?.productId}</h2>
    </div>
  )
}