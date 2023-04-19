import { TermButton } from './TermButton'

const terms = { F: 'Fall', W: 'Winter', S: 'Spring' }

export const TermSelector = ({ term, setTerm }) => {
  return (
      <div className="btn-toolbar justify-content-center">
        <div className="btn-group">
        {
          Object.values(terms).map(
            value => <TermButton key={value} term={value} setTerm={setTerm} checked={value === term} />
          )
        }
        </div>
      </div>
  )
}
