import { Button } from "@/components/ui/button";

export default function Header() {

    return (
        <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-2xl font-extrabold tracking-tight">
                    CA Monk <span className="text-muted-foreground">Blog</span>
                </h1>

                <Button size="sm" className="rounded-full px-5">
                    Sign-up
                </Button>
            </div>
        </header>
    );
}
