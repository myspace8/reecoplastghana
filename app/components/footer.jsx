export default function Footer() {

    const footerNavs = [
        {
            href: 'javascript:void()',
            name: 'Terms'
        },
        {
            href: 'javascript:void()',
            name: 'License'
        },
        {
            href: 'javascript:void()',
            name: 'Privacy'
        },
        {
            href: 'javascript:void()',
            name: 'About us'
        }
    ]
    return (
        <footer className="pt-10">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="flex flex-col gap-4 mt-4 py-5 border-t md:text-center">
                        <div className="space-y-6">
                            <ul className="flex flex-wrap items-center justify-center gap-4 sm:text-base">
                                {
                                    footerNavs.map((item, idx) => (
                                        <li className="text-gray-800 hover:text-gray-500">
                                            <a key={idx} href={item.href}>
                                                {item.name}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div> 
                    <p className="text-sm text-center">© 2023 Reecoplastghana. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}