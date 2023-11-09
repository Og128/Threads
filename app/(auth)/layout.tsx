import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from 'next/font/google'
import '../globals.css'

export const metadata = {
	title: 'Threads',
	description: 'A Next.js clone app of Meta Threads'
}

const inter = Inter({ subsets: ["latin"] })
export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={`${inter.className} bg-dark-4`}>
					{children}
				</body>
			</html>
		</ClerkProvider>
	)
}