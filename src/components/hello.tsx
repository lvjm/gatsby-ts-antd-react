// src/components/Hello.tsx

import * as React from "react"
import "../../static/style.css"

export interface Props {
  name: string
  enthusiasmLevel?: number
}

function Hello({ name, enthusiasmLevel = 3 }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusiastic. :D")
  }
  return (
    <div className="hello">
      <div className="greeting">
        <a href="http://localhost:8000/sign">你好,请点我进行登陆</a>
      </div>
    </div>
  )
}

export default Hello

// helpers
function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!")
}
