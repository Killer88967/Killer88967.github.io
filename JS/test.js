<<<<<<< HEAD
// This is just me 


=======
>>>>>>> 1153e4f82a05094311073a2a7e450fb981be057c
// Create a new IndexedDB database
const request = indexedDB.open("myDatabase", 1);

request.onupgradeneeded = (event) => {
  const db = event.target.result;
  const objectStore = db.createObjectStore("myObjectStore", { keyPath: "id" });
  objectStore.createIndex("name", "name", { unique: false });
};

request.onsuccess = (event) => {
  const db = event.target.result;
  const transaction = db.transaction("myObjectStore", "readwrite");
  const objectStore = transaction.objectStore("myObjectStore");

  // Add some data to the object store
  const data = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" }
  ];
  data.forEach((item) => {
    objectStore.add(item);
  });
};

// Delete the database when the page is closed
window.addEventListener("beforeunload", () => {
  indexedDB.deleteDatabase("myDatabase");
<<<<<<< HEAD
});
=======
});
>>>>>>> 1153e4f82a05094311073a2a7e450fb981be057c
