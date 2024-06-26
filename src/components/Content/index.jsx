export default function Content({
    title = 'Judul kosong',
    content = 'Content Kosong'
}) {
    return (
        <div className="content">
            <p>{title}</p>
            <p>{content}</p>
        </div>
    )
}