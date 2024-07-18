"use client";

import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { useEffect, useState } from "react";
import { db } from "./firebase";

interface Student {
  name: string;
  section: string;
  id: string;
}

export default function Home() {
  const [items, setItems] = useState<Student[]>([]);
  const [student, setStudent] = useState({name: '', section: ''});
  const [canSubmit, setCanSubmit] = useState(true);

  const readData = async() => {
    const querySnapshot = await getDocs(collection(db, "students"));
    const data : Student[] = [];
    querySnapshot.forEach((doc) => {
      data.push({ name: doc.data().name, section: doc.data().section, id: doc.id} as Student);
    });
    setItems(data);
  }

  const addData = async(e : any) => {
    e.preventDefault();
    if (student.name != "" && student.section != "") {
      try {
        setCanSubmit(false);

        const docRef = await addDoc(collection(db, "students"), {
          name: student.name,
          section: student.section,
        });

        setStudent({name: '', section: ''});

        await readData();

        setCanSubmit(true);

      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  }

  useEffect(() => {
    readData();
  }, []);

  return (
    <div className="w-1/3 min-w-fit flex flex-col items-center bg-gray-300 border-2 border-black p-8"> 
      <span className="text-xl font-bold"> Attendance </span>

      <form className="pt-2 pb-4 flex flex-col items-center">
        <div className="flex flex-row justify-center w-full">
          <input onChange={(e) => setStudent({...student, name: e.target.value})} value={student.name} type='text' placeholder='Name' className="p-2 mr-2 w-2/3 rounded-md border border-black" />
          <input onChange={(e) => setStudent({...student, section: e.target.value})} value={student.section} type='text' placeholder='Section' className="p-2 w-1/3 rounded-md border border-black" />
        </div>
        <button disabled={!canSubmit} className={'rounded-md border border-black mt-4 p-2 ' + (canSubmit ? 'bg-green-400' : 'bg-green-200') } onClick={addData}> Add Student </button>
      </form>

      <ul className="w-full mt-2">
        {items.map((item) => (
            <li key={item.id} className="border border-black w-full p-2 w-full">
              <span className=""> 
                {item.name}, ({item.section})
              </span>
            </li>
        ))}
      </ul>
    </div>
  );
}
