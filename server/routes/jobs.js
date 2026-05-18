const express = require('express');
const router = express.Router();

// Hardcoded jobs data
const jobs = [
  {
    _id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $150k",
    description: "We are looking for an experienced Frontend Developer proficient in React.",
    requirements: ["5+ years React experience", "Strong CSS/HTML skills"],
    category: "Development"
  },
  {
    _id: "2",
    title: "UX/UI Designer",
    company: "DesignStudio",
    location: "Remote",
    type: "Contract",
    salary: "$80k - $100k",
    description: "Join our creative team to design beautiful interfaces.",
    requirements: ["3+ years UX experience", "Figma expertise"],
    category: "Design"
  },
  {
    _id: "3",
    title: "DevOps Engineer",
    company: "CloudSystems",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$130k - $160k",
    description: "Manage cloud infrastructure and CI/CD pipelines.",
    requirements: ["AWS certification", "Kubernetes experience"],
    category: "DevOps"
  },
  {
    _id: "4",
    title: "Backend Developer",
    company: "DataFlow",
    location: "New York, NY",
    type: "Full-time",
    salary: "$110k - $140k",
    description: "Build scalable APIs and microservices.",
    requirements: ["Node.js", "MongoDB", "API design"],
    category: "Development"
  },
  {
    _id: "5",
    title: "Product Manager",
    company: "InnovateLabs",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140k - $170k",
    description: "Lead product development from concept to launch.",
    requirements: ["3+ years product management", "Agile methodology"],
    category: "Product"
  }
];

// GET all jobs - RETURNS THE JOBS ARRAY
router.get('/', (req, res) => {
  console.log(`📋 Sending ${jobs.length} jobs to frontend`);
  res.json(jobs);  // This sends the actual jobs, not a message
});

// GET single job by ID
router.get('/:id', (req, res) => {
  const job = jobs.find(j => j._id === req.params.id);
  if (job) {
    res.json(job);
  } else {
    res.status(404).json({ message: 'Job not found' });
  }
});

// GET all categories
router.get('/categories/all', (req, res) => {
  const categories = [...new Set(jobs.map(job => job.category))];
  res.json(categories);
});

// POST create new job
router.post('/', (req, res) => {
  const newJob = {
    _id: String(jobs.length + 1),
    ...req.body
  };
  jobs.push(newJob);
  res.status(201).json(newJob);
});

module.exports = router;