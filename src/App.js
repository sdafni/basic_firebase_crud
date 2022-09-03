import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Jobs from './components/Jobs'
import AddJob from './components/AddJob'
import About from './components/About'


import { initializeApp } from 'firebase/app';
import { getFirestore } from "@firebase/firestore";

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc
} from "firebase/firestore";// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZAyI_ON7F4VEZ_9k1ETzF4_k6qcBJ1uo",
  authDomain: "yuveta2-166505.firebaseapp.com",
  databaseURL: "https://yuveta2-166505-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "yuveta2-166505",
  storageBucket: "yuveta2-166505.appspot.com",
  messagingSenderId: "238877844764",
  appId: "1:238877844764:web:0b49af2563aa55139806d9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



const jobsCollectionRef = collection(db, "jobs");


const App = () => {
  const [showAddJob, setShowAddJob] = useState(false)
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const getJobs = async () => {
      const jobsFromServer = await fetchJobs()
      setJobs(jobsFromServer)
    }

    getJobs()
  }, [])

  // Fetch Jobs
  const fetchJobs = async () => {
    const JobsColSnapshot = await getDocs(jobsCollectionRef);
    const jobsList = JobsColSnapshot.docs.map(doc => doc.data());
    return jobsList;


    // const res = await fetch('http://localhost:5000/jobs')
    // const data = await res.json()

    // return data
  }

  // Fetch Job
  const fetchJob = async (id) => {

    // const res = await fetch(`http://localhost:5000/jobs/${id}`)
    // const data = await res.json()

    const data = doc(db, "jobs", id);


    return data
  }

  // Add Job
  const addJob = async (job) => {


    const id = String(Math.floor(Math.random() * 10000) + 1);
    const newJob = { id, ...job }

    // Add a new document in collection "cities"
    // await addDoc(jobsCollectionRef, newJob)
    await setDoc(doc(db, "jobs", newJob.id), newJob);

    // const res = await fetch('http://localhost:5000/jobs', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify(job),
    // })

    // const data = await res.json()
    const data = await fetchJobs()
    const jobsFromServer = await fetchJobs()
    setJobs(jobsFromServer)

    // TODO why, if we fetch jobs?
    //setJobs([...jobs, data])

  }

  // Delete Job
  const deleteJob = async (id) => {

    const jobDoc = doc(db, "jobs", id);
    await deleteDoc(jobDoc);
    setJobs(jobs.filter((job) => job.id !== id))

    // const res = await fetch(`http://localhost:5000/jobs/${id}`, {
    //   method: 'DELETE',
    // })
    // //We should control the response status to decide if we will change the state or not.
    // res.status === 200
    //   ? setJobs(jobs.filter((job) => job.id !== id))
    //   : alert('Error Deleting This Job')
  }


  return (
    <Router>
      <div className='container'>
        <Header
          onAdd={() => setShowAddJob(!showAddJob)}
          showAdd={showAddJob}
        />
        <Routes>
          <Route
            path='/'
            element={
              <>
                {showAddJob && <AddJob onAdd={addJob} />}
                {jobs.length > 0 ? (
                  <Jobs
                    jobs={jobs}
                    onDelete={deleteJob}
                  />
                ) : (
                  'No Jobs To Show'
                )}
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
