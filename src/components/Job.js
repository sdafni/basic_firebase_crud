import { FaTimes } from 'react-icons/fa'

const Job = ({ job, onDelete, onToggle }) => {
  return (
    <div
      className={`job`}
      onDoubleClick={() => onToggle(job.id)}
    >
      <h3>
        {job.companyName}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(job.id)}
        />
      </h3>
      <p>{job.jobTitle}</p>
    </div>
  )
}

export default Job
