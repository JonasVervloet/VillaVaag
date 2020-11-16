import Link from 'next/link';

export default function WbwHome() {
    return (
        <div>
            <h1>Villa Vaag</h1>
            <h2>Wie Betaald Wat?!</h2>
            <Link href="/wbw/login">
                click here to login-in
            </Link>
        </div>
    )
} 