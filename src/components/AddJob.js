import { useState } from 'react'

const AddJob = ({ onAdd }) => {
  const [companyName, setcompanyName] = useState('')
  const [jobTitle, setjobTitle] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!companyName) {
      alert('Please add a companyName')
      return
    }

    onAdd({ companyName, jobTitle})

    setcompanyName('')
    setjobTitle('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>


      <div className='form-control'>
        <label>Company</label>
        <input
          id="comapnyNAme"
          type='text'
          placeholder='Company name'
          value={companyName}
          onChange={(e) => setcompanyName(e.target.value)}
        />
      </div>

      <div className='form-control'>
        <label>Job title</label>
        <input
          id='jobTitle'
          type='text'
          placeholder='Job title'
          value={jobTitle}
          onChange={(e) => setjobTitle(e.target.value)}
        />
      </div>


      <div className='form-control  form-control-check'>
        <label>Applied</label>
        <input
          type='checkbox'
          value={jobTitle}
          onChange={(e) => setjobTitle(e.target.value)}
        />
      </div>

      <input type='submit' value='Save Job' className='btn btn-block' />
    </form>
  )
}

export default AddJob
