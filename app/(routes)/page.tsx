import getBanners from "@/actions/get-banner";
import getProducts from "@/actions/get-products";
import Banner from "@/components/banner";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0

const HomePage = async () => {
    const banner = await getBanners("723685b6-3ce8-4ed2-ac95-d8ecc72f6b4f");
    const products = await getProducts({isFeatured: true})
    return(
        <div>
            <Container>
                <div className="space-y-10 pb-10">
                <Banner data={banner}/>
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Best Product" items={products}/>
                </div>
                </div>
            </Container>
        </div>
    )
}

export default HomePage;