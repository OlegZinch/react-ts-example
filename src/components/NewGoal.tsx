import { useRef, type FormEvent } from 'react'

interface NewGoalProps {
  onAdd: (text: string, summary: string) => void
}

export default function NewGoal({ onAdd }: NewGoalProps) {
  const goalRef = useRef<HTMLInputElement>(null)
  const summaryRef = useRef<HTMLInputElement>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const enteredGoal = goalRef.current!.value
    const enteredSummery = summaryRef.current!.value

    // validation...
    onAdd(enteredGoal, enteredSummery)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='goal'>Your goal</label>
        <input id='goal' type='text' ref={goalRef} />
      </p>
      <p>
        <label htmlFor='summary'>Short summery</label>
        <input id='summary' type='text' ref={summaryRef} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  )
}
