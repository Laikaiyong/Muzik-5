import { useRouter } from 'next/router'

export default function About(){
    const router = useRouter()
    const { id } = router.query

    // const item = musics[id - 1];
    return (
        <>
        <h1>About</h1>
        </>

    )
}