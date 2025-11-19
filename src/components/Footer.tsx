export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-2xl font-bold text-white tracking-tighter">
                        KHL<span className="text-slate-500">HVAC</span>
                    </div>

                    <div className="text-sm">
                        &copy; {new Date().getFullYear()} KHL HVAC. All rights reserved.
                    </div>

                    <div className="flex gap-6 text-sm font-medium">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
