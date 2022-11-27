import { Television } from "../types"

type Props = {
  television: Television
}

function TelevisionDisplay({ television }: Props) {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>
            {television.brand} {television.modelNumber}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Composite</td>
          <td>{television.composite}</td>
        </tr>
        <tr>
          <td>S-video</td>
          <td>{television.svideo}</td>
        </tr>
        <tr>
          <td>Component</td>
          <td>{television.component}</td>
        </tr>
        <tr>
          <td>Widescreen</td>
          <td>{`${television.widescreen}`}</td>
        </tr>
      </tbody>
    </table>
  )
}
// ...

export default TelevisionDisplay
