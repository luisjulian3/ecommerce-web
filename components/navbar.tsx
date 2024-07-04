import Link from "next/link";
import Container from "./ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";

export const revalidate = 0

const Navbar = async () => {
    const categories = await getCategories();
    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        <Link href="/" className="ml-4 lg:ml-8 flex items-center">
                            <p className="font-bold text-xl">STORE</p>
                        </Link>
                        <MainNav data={categories} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar;