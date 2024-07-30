export interface EducationData {
  id: number;
  date: string;
  degree: string;
  degreeLevel: string;
  degreeShortName: string;
  degreeName: string;
  college: string;
  location: string;
}

const educationData: EducationData[] = [
  {
    id: 1,
    date: "2021 - 2025",
    degree: "Graduation",
    degreeLevel: "Bachelor’s Degree",
    degreeShortName: "B.Tech",
    degreeName: "Bachelor of Technology in Electronics And Communication Engineering",
    college: "Motilal Nehru National Institute of Technolgy Allahabad, Prayagraj",
    location: "Teliarganj,Prayagraj, India",
    
  },
  {
    id: 2,
    date: "2019-2021",
    degree: "Secondary",
    degreeLevel: "Intermediate",
    degreeShortName: "PCM",
    degreeName: "Physics, Chemistry, Mathematics",
    college: "Madhav Public School",
    location: "Gorakhpur, India",

  },
  {
    id: 3,
    date: "2009-2019",
    degree: "Secondary",
    degreeLevel: "Intermediate",
    degreeShortName: "Common",
    degreeName: "Physics, Chemistry, Mathematics,Social Science,English,Hindi",
    college: "K.V No.1 AFS Gorakhpur",
    location: "Gorakhpur, India",
  },
];

export default educationData;
