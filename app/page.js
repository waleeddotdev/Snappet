import Sidebar from "@/components/sidebar/sidebar";
import View from "@/components/view/view";

export default function Home() {
    return (
        <main className="w-full flex flex-row items-center gap-10 max-h-[100vh] h-full">
            <Sidebar />
            <View />
        </main>
    );
}
