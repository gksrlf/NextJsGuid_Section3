import { useRouter } from "next/router"

const PortfolioProjectPage = () => {
	const router = useRouter()

	console.log(router.pathname)
	console.log(router.query)

	return (
		<div>
			<h1>The Portfolid Project Page</h1>
		</div>
	)
}

export default PortfolioProjectPage
