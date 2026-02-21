const Stats = () => {
    return (
        <div className="flex flex-col gap-10">
            <p className="text-2xl">Number of Todos: { }</p>

            <p className="text-2xl">Incomplete Todos: { }</p>

            <p className="text-2xl">Completed Todos: { }</p>

            <p className="text-2xl">Recent Todos (5): { }</p>
        </div>
    )
}

export default Stats;