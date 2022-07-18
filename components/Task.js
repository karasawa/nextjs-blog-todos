import Link from "next/link";

function Task({ task }) {
  return (
    <div className="text-white">
      <span>{task.id}</span>
      {" : "}
      <Link href={`/tasks/${task.id}`}>
        <span className="cursor-pointer border-b border-gray-500 hover:border-gray-600">
          {task.title}
        </span>
      </Link>
    </div>
  );
}

export default Task;
