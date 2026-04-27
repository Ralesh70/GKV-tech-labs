import { useState, useEffect, useRef } from "react";

// ─── SAMPLE DATA ────────────────────────────────────────────────────────────
const INITIAL_DATA = {
  branches: ["CSE", "ECE", "ME", "EE"],
  semesters: [1, 2, 3, 4, 5, 6, 7, 8],
  labSubjects: {

    // ── CSE SEMESTER 3 ──────────────────────────────────────────────────────
    "CSE-3": [
      {
        id: "cs301l", code: "CS-301L", name: "Data Structures Lab",
        syllabusPdf: "https://ugcmoocs.inflibnet.ac.in/assets/ugcmoocs/assets/pdf/syllabi/data-structures.pdf",
        refFilePdf: "https://www.tutorialspoint.com/data_structures_algorithms/data_structures_algorithms_tutorial.pdf",
        experiments: [
          {
            id: "exp1", title: "Implementation of Stack using Arrays",
            aim: "To implement a Stack data structure using arrays in C and perform push, pop, and peek operations.",
            theory: "A stack is a linear data structure that follows the LIFO (Last In First Out) principle. It is named as a stack because it behaves like a real-world stack — for example, a pile of books. Push inserts an element at the top, pop removes the top element, and peek returns the top element without removing it. Stacks are used in function call management, expression evaluation, undo/redo operations, and browser history.",
            principle: "LIFO (Last In First Out): The element inserted last is the first one to be removed. Top pointer always points to the most recently inserted element.",
            procedure: "1. Declare an integer array of size MAX (e.g., 100) and initialize top = -1.
2. Push operation: Check if top == MAX-1 (overflow). If not, increment top and insert element.
3. Pop operation: Check if top == -1 (underflow). If not, return arr[top] and decrement top.
4. Peek operation: Return arr[top] without modifying top.
5. Display all elements from top to bottom.
6. Test with minimum 5 push and 3 pop operations.",
            result: "Stack implemented successfully using array. All push, pop, peek operations verified with correct LIFO behaviour.",
            youtubeLink: "https://www.youtube.com/embed/F1Wp3077bME",
            faculty: { name: "Dr. A. K. Sharma", email: "aksharma@gkv.ac.in", phone: "+91-9876543210", department: "CSE" }
          },
          {
            id: "exp2", title: "Implementation of Queue using Arrays",
            aim: "To implement a Queue data structure using arrays with enqueue and dequeue operations.",
            theory: "Queue is a linear data structure that follows the FIFO (First In First Out) principle. A queue is open at both ends — one end (rear) is used for insertion and the other end (front) is used for deletion. Real-world examples include ticket queues, printer job queues, and CPU scheduling. Circular queue overcomes the limitation of wasted space in linear queues.",
            principle: "FIFO (First In First Out): The element inserted first is the first to be removed. Front pointer tracks deletion, Rear pointer tracks insertion.",
            procedure: "1. Declare array of size MAX, initialize front = rear = -1.
2. Enqueue: If rear == MAX-1, queue is full. Else increment rear and insert element.
3. Dequeue: If front == -1, queue is empty. Else return arr[front] and increment front.
4. Display all elements from front to rear.
5. Implement circular queue to reuse space.
6. Test with sample inputs.",
            result: "Queue implemented successfully. FIFO ordering verified. Circular queue demonstrated to overcome linear queue limitations.",
            youtubeLink: "https://www.youtube.com/embed/zp6pBNbUB2U",
            faculty: { name: "Dr. A. K. Sharma", email: "aksharma@gkv.ac.in", phone: "+91-9876543210", department: "CSE" }
          },
          {
            id: "exp3", title: "Binary Search Tree - Insert, Delete, Traverse",
            aim: "To implement a Binary Search Tree (BST) with insertion, deletion, and all traversals.",
            theory: "A Binary Search Tree is a hierarchical data structure where each node has at most two children. For any node: all values in the left subtree are less than the node, and all values in the right subtree are greater. BST allows efficient searching in O(log n) average case. Traversals: Inorder gives sorted output, Preorder is used for tree copying, Postorder is used for deletion.",
            principle: "For node N: Left subtree contains values < N.data, Right subtree contains values > N.data. No duplicate values allowed.",
            procedure: "1. Create a Node structure with data, left, and right pointers.
2. Insert: Compare with root. Go left if smaller, right if larger, recursively.
3. Inorder traversal: Left → Root → Right (gives sorted order).
4. Preorder traversal: Root → Left → Right.
5. Postorder traversal: Left → Right → Root.
6. Delete: Handle 3 cases — leaf node, one child, two children.
7. Search: Traverse comparing data at each node.",
            result: "BST successfully created. Inorder traversal produced sorted output. All three traversals verified.",
            youtubeLink: "https://www.youtube.com/embed/cySVml6e_Fc",
            faculty: { name: "Prof. R. Singh", email: "rsingh@gkv.ac.in", phone: "+91-9871234567", department: "CSE" }
          },
          {
            id: "exp3b", title: "Linked List Operations",
            aim: "To implement Singly Linked List with insertion, deletion and traversal.",
            theory: "A linked list is a linear data structure where each element (node) contains data and a pointer to the next node. Unlike arrays, linked lists do not require contiguous memory. They allow dynamic memory allocation and efficient insertion/deletion at any position. Types: Singly, Doubly, and Circular Linked List.",
            principle: "Each node stores data + address of next node. Head pointer stores address of first node. Last node's next pointer is NULL.",
            procedure: "1. Define Node structure: int data; Node* next;
2. Insert at beginning: Create node, point its next to head, update head.
3. Insert at end: Traverse to last node, attach new node.
4. Delete a node: Find the node, update previous node's next pointer, free memory.
5. Display: Traverse from head to NULL, print each node's data.
6. Count nodes and search for a value.",
            result: "Singly linked list operations performed correctly. Insertion at head, tail and middle verified.",
            youtubeLink: "https://www.youtube.com/embed/njTh_OwMljA",
            faculty: { name: "Prof. R. Singh", email: "rsingh@gkv.ac.in", phone: "+91-9871234567", department: "CSE" }
          },
          {
            id: "exp3c", title: "Sorting Algorithms - Bubble, Selection, Insertion",
            aim: "To implement and compare Bubble Sort, Selection Sort, and Insertion Sort algorithms.",
            theory: "Sorting is the process of arranging data in a particular order (ascending or descending). Bubble Sort repeatedly swaps adjacent elements if they are in wrong order — O(n²). Selection Sort selects the minimum element and places it at correct position — O(n²). Insertion Sort builds sorted array one element at a time — O(n²) worst, O(n) best case. These are comparison-based sorting algorithms.",
            principle: "All three are in-place O(n²) comparison-based sorting algorithms. Insertion sort is preferred for nearly-sorted arrays. All are stable algorithms except Selection Sort.",
            procedure: "1. Input an array of n integers.
2. Bubble Sort: Nested loops, compare arr[j] and arr[j+1], swap if needed.
3. Selection Sort: Find minimum in unsorted part, swap with first element of unsorted part.
4. Insertion Sort: Pick element, shift sorted elements right until correct position found, insert.
5. Count comparisons and swaps for each algorithm.
6. Compare performance on sorted, reverse-sorted, and random arrays.",
            result: "All three sorting algorithms implemented. Insertion Sort performed best on nearly sorted data. Results verified.",
            youtubeLink: "https://www.youtube.com/embed/kgBjXUE_Nwc",
            faculty: { name: "Dr. A. K. Sharma", email: "aksharma@gkv.ac.in", phone: "+91-9876543210", department: "CSE" }
          }
        ]
      },
      {
        id: "cs302l", code: "CS-302L", name: "OOP Lab (C++/Java)",
        syllabusPdf: "https://ugcmoocs.inflibnet.ac.in/assets/ugcmoocs/assets/pdf/syllabi/oop.pdf",
        refFilePdf: "https://www.tutorialspoint.com/java/java_tutorial.pdf",
        experiments: [
          {
            id: "exp4", title: "Classes and Objects in Java",
            aim: "To understand and implement the concept of Classes, Objects, Constructors, and Methods in Java.",
            theory: "Java is a pure Object-Oriented Programming language. A class is a blueprint/template that defines the properties (fields) and behaviours (methods) of objects. An object is an instance of a class — it has a unique identity, state, and behaviour. Constructors are special methods called automatically when an object is created. Java supports method overloading — multiple methods with same name but different parameters.",
            principle: "Encapsulation: Bundling data and methods together. Data hiding: Keeping data private, accessed through public methods (getters/setters).",
            procedure: "1. Create a class 'Student' with fields: rollNo, name, marks.
2. Define a parameterized constructor.
3. Define methods: displayInfo(), calculateGrade().
4. Create objects in main() and call methods.
5. Demonstrate method overloading with add(int,int) and add(double,double).
6. Use 'this' keyword to refer to current object.",
            result: "Class and object concepts demonstrated successfully. Encapsulation, constructor, and method overloading verified.",
            youtubeLink: "https://www.youtube.com/embed/6T_HgnjoYwM",
            faculty: { name: "Dr. P. Verma", email: "pverma@gkv.ac.in", phone: "+91-9812345678", department: "CSE" }
          },
          {
            id: "exp4b", title: "Inheritance and Polymorphism",
            aim: "To implement single, multilevel, and hierarchical inheritance and demonstrate runtime polymorphism.",
            theory: "Inheritance allows a class (child/subclass) to acquire properties and methods of another class (parent/superclass). It promotes code reuse and establishes IS-A relationship. Types: Single, Multilevel, Hierarchical, Multiple (via interfaces in Java). Polymorphism means 'many forms'. Runtime polymorphism is achieved through method overriding — the method to call is determined at runtime based on the object type.",
            principle: "IS-A relationship: Child class IS-A type of parent class. Method Overriding: Same method signature in child class replaces parent's method at runtime.",
            procedure: "1. Create class 'Animal' with method sound().
2. Create 'Dog' and 'Cat' extending Animal, override sound().
3. Demonstrate multilevel: Animal → Mammal → Dog.
4. Use parent class reference: Animal a = new Dog(); a.sound();
5. Use 'super' keyword to call parent constructor.
6. Demonstrate 'final' keyword to prevent overriding.",
            result: "Inheritance hierarchy created successfully. Runtime polymorphism demonstrated — correct overridden method called based on object type.",
            youtubeLink: "https://www.youtube.com/embed/9YOgDYbcfkY",
            faculty: { name: "Dr. P. Verma", email: "pverma@gkv.ac.in", phone: "+91-9812345678", department: "CSE" }
          },
          {
            id: "exp4c", title: "Abstract Classes and Interfaces",
            aim: "To implement abstract classes and interfaces and understand their differences.",
            theory: "An abstract class is a class that cannot be instantiated and may contain abstract methods (without body) that must be overridden in subclasses. An interface is a 100% abstract contract — it defines what a class must do, not how. A class can implement multiple interfaces but extend only one class. Interfaces achieve multiple inheritance in Java. From Java 8, interfaces can have default and static methods.",
            principle: "Abstract class: Partial abstraction (0-100%). Interface: Full abstraction (100%). Both achieve abstraction and enforce a contract on subclasses.",
            procedure: "1. Create abstract class 'Shape' with abstract method area().
2. Create 'Circle' and 'Rectangle' extending Shape, implement area().
3. Create interface 'Drawable' with method draw().
4. Implement Drawable in both classes.
5. Show a class implementing multiple interfaces.
6. Demonstrate default method in interface.",
            result: "Abstract class and interface concepts verified. Multiple interface implementation demonstrated successfully.",
            youtubeLink: "https://www.youtube.com/embed/HvPlEJ3LHgE",
            faculty: { name: "Dr. P. Verma", email: "pverma@gkv.ac.in", phone: "+91-9812345678", department: "CSE" }
          }
        ]
      },
      {
        id: "cs303l", code: "CS-303L", name: "Database Management Lab",
        syllabusPdf: "https://ugcmoocs.inflibnet.ac.in/assets/ugcmoocs/assets/pdf/syllabi/dbms.pdf",
        refFilePdf: "https://www.tutorialspoint.com/sql/sql_tutorial.pdf",
        experiments: [
          {
            id: "exp_db1", title: "DDL Commands - CREATE, ALTER, DROP",
            aim: "To study and implement DDL (Data Definition Language) commands in SQL.",
            theory: "DDL commands are used to define and modify the structure of database objects like tables, views, and indexes. CREATE creates new database objects. ALTER modifies existing structure — add/remove/modify columns. DROP deletes objects permanently. TRUNCATE removes all rows but keeps structure. These commands are auto-committed — changes are permanent immediately.",
            principle: "DDL operates on the schema (structure) of the database, not on the data itself. All DDL commands are auto-committed in most RDBMS.",
            procedure: "1. CREATE TABLE students (id INT PRIMARY KEY, name VARCHAR(50), marks FLOAT);
2. INSERT sample records.
3. ALTER TABLE students ADD COLUMN branch VARCHAR(20);
4. ALTER TABLE students MODIFY COLUMN name VARCHAR(100);
5. CREATE INDEX on name column.
6. DROP TABLE and verify deletion.
7. Use DESCRIBE to view table structure.",
            result: "All DDL commands executed successfully. Table structure created, modified, and deleted as expected.",
            youtubeLink: "https://www.youtube.com/embed/HXV3zeQKqGY",
            faculty: { name: "Dr. S. Gupta", email: "sgupta@gkv.ac.in", phone: "+91-9867890123", department: "CSE" }
          },
          {
            id: "exp_db2", title: "DML Commands and SQL Queries",
            aim: "To implement DML commands and practice SQL queries with WHERE, ORDER BY, GROUP BY.",
            theory: "DML (Data Manipulation Language) commands are used to manipulate data stored in tables. INSERT adds new rows. UPDATE modifies existing data. DELETE removes specific rows. SELECT retrieves data. SQL clauses: WHERE filters rows, ORDER BY sorts results, GROUP BY groups rows for aggregate functions (COUNT, SUM, AVG, MAX, MIN), HAVING filters groups.",
            principle: "DML operates on data. SELECT-FROM-WHERE is the fundamental query structure. Aggregate functions compute summary statistics on groups of data.",
            procedure: "1. INSERT multiple records into students table.
2. SELECT * FROM students WHERE marks > 75;
3. UPDATE students SET marks = marks + 5 WHERE branch = 'CSE';
4. DELETE FROM students WHERE marks < 40;
5. SELECT branch, AVG(marks) FROM students GROUP BY branch HAVING AVG(marks) > 60;
6. Use ORDER BY marks DESC to get top scorers.
7. Practice JOIN between two tables.",
            result: "All DML commands and SQL queries executed correctly. Aggregate functions and GROUP BY verified.",
            youtubeLink: "https://www.youtube.com/embed/7S_tz1z_5bA",
            faculty: { name: "Dr. S. Gupta", email: "sgupta@gkv.ac.in", phone: "+91-9867890123", department: "CSE" }
          }
        ]
      }
    ],

    // ── CSE SEMESTER 5 ──────────────────────────────────────────────────────
    "CSE-5": [
      {
        id: "cs501l", code: "CS-501L", name: "Operating Systems Lab",
        syllabusPdf: "https://ugcmoocs.inflibnet.ac.in/assets/ugcmoocs/assets/pdf/syllabi/os.pdf",
        refFilePdf: "https://www.tutorialspoint.com/operating_system/operating_system_tutorial.pdf",
        experiments: [
          {
            id: "exp_os1", title: "CPU Scheduling - FCFS and SJF",
            aim: "To simulate CPU scheduling algorithms: First Come First Serve (FCFS) and Shortest Job First (SJF).",
            theory: "CPU scheduling determines which process runs on CPU at any given time. FCFS is the simplest — processes are executed in order of arrival. It is non-preemptive and suffers from the convoy effect. SJF selects the process with the smallest burst time — optimal in minimizing average waiting time but requires knowing burst time in advance. Preemptive SJF is also called Shortest Remaining Time First (SRTF).",
            principle: "Scheduling metrics: Waiting Time = Turnaround Time - Burst Time. Turnaround Time = Completion Time - Arrival Time. Average Waiting Time is minimized by SJF.",
            procedure: "1. Input: number of processes, arrival time, burst time for each.
2. FCFS: Sort by arrival time. Calculate completion, turnaround, and waiting times.
3. Create Gantt chart for FCFS.
4. SJF (non-preemptive): At each scheduling point, pick shortest burst among arrived processes.
5. Calculate metrics for SJF.
6. Compare average waiting times of both algorithms.
7. Display Gantt charts for both.",
            result: "FCFS and SJF simulated successfully. SJF gave lower average waiting time than FCFS as expected.",
            youtubeLink: "https://www.youtube.com/embed/EWkQl0n0w5M",
            faculty: { name: "Dr. K. Mishra", email: "kmishra@gkv.ac.in", phone: "+91-9878901234", department: "CSE" }
          },
          {
            id: "exp_os2", title: "Page Replacement Algorithms - FIFO, LRU, Optimal",
            aim: "To simulate page replacement algorithms and calculate page fault rates.",
            theory: "Page replacement is required when a page fault occurs and no free frame is available. FIFO replaces the oldest page in memory — simple but suffers from Belady's anomaly. LRU (Least Recently Used) replaces the page not used for the longest time — close to optimal. Optimal algorithm replaces the page that will not be used for the longest time in future — theoretical best, used as benchmark.",
            principle: "Page Fault Rate = Number of Page Faults / Total Page References. Lower page faults = better algorithm performance. Optimal gives minimum page faults.",
            procedure: "1. Input: reference string (e.g., 1 2 3 4 1 2 5 1 2 3 4 5) and number of frames.
2. FIFO: Maintain a queue. On fault, replace front of queue.
3. LRU: Track last use time of each page. Replace page with oldest last-use time.
4. Optimal: For each fault, find page whose next use is farthest in future.
5. Count page faults for each algorithm.
6. Compare results in a table.",
            result: "All three algorithms simulated. Optimal gave fewest faults. LRU performed better than FIFO in most cases.",
            youtubeLink: "https://www.youtube.com/embed/sTAlgAnFN2c",
            faculty: { name: "Dr. K. Mishra", email: "kmishra@gkv.ac.in", phone: "+91-9878901234", department: "CSE" }
          }
        ]
      },
      {
        id: "cs502l", code: "CS-502L", name: "Computer Networks Lab",
        syllabusPdf: "https://ugcmoocs.inflibnet.ac.in/assets/ugcmoocs/assets/pdf/syllabi/computer-networks.pdf",
        refFilePdf: "https://www.tutorialspoint.com/computer_fundamentals/computer_fundamentals_tutorial.pdf",
        experiments: [
          {
            id: "exp_cn1", title: "Socket Programming - TCP Client-Server",
            aim: "To implement a TCP client-server communication using socket programming in Python/C.",
            theory: "Sockets provide an endpoint for communication between two machines. TCP (Transmission Control Protocol) is connection-oriented — reliable, ordered, error-checked delivery. Server creates a socket, binds to a port, listens for connections, and accepts clients. Client creates a socket and connects to server's IP and port. Data is sent/received using send() and recv() functions. HTTP, FTP, SSH all use TCP sockets.",
            principle: "TCP Three-way Handshake: SYN → SYN-ACK → ACK establishes connection. Full-duplex communication — both sides can send and receive simultaneously.",
            procedure: "1. Server side: socket() → bind(ip, port) → listen() → accept() → recv() → send() → close()
2. Client side: socket() → connect(server_ip, port) → send() → recv() → close()
3. Implement echo server — sends back whatever client sends.
4. Test by sending strings and files.
5. Handle multiple clients using threading.
6. Verify using netstat command.",
            result: "TCP client-server communication established successfully. Echo server responded correctly to all client messages.",
            youtubeLink: "https://www.youtube.com/embed/3QiPPX-KeSc",
            faculty: { name: "Prof. T. Yadav", email: "tyadav@gkv.ac.in", phone: "+91-9889012345", department: "CSE" }
          }
        ]
      }
    ],

    // ── ECE SEMESTER 3 ──────────────────────────────────────────────────────
    "ECE-3": [
      {
        id: "ec301l", code: "EC-301L", name: "Analog Electronics Lab",
        syllabusPdf: "https://ugcmoocs.inflibnet.ac.in/assets/ugcmoocs/assets/pdf/syllabi/analog-electronics.pdf",
        refFilePdf: "https://www.tutorialspoint.com/electronic_circuits/electronic_circuits_tutorial.pdf",
        experiments: [
          {
            id: "exp5", title: "V-I Characteristics of PN Junction Diode",
            aim: "To study the forward and reverse bias V-I characteristics of a PN Junction Diode.",
            theory: "A PN junction diode is formed by joining P-type and N-type semiconductor materials. In forward bias, the external voltage opposes the barrier potential, allowing current to flow above threshold (~0.7V for Si). In reverse bias, the barrier increases, allowing only a very small leakage current until breakdown voltage. The ideal diode equation: I = I₀(e^(V/ηVT) - 1) where I₀ is reverse saturation current, η is ideality factor, VT is thermal voltage (~26mV at room temperature).",
            principle: "Forward bias reduces potential barrier → exponential increase in current. Reverse bias increases barrier → negligible current (only reverse saturation current I₀).",
            procedure: "1. Connect IN4007 diode in forward bias with milliammeter in series.
2. Use 0-5V variable DC supply. Vary voltage from 0 to 1V in steps of 0.1V.
3. Record corresponding current at each voltage.
4. Reconnect in reverse bias with microammeter.
5. Vary reverse voltage from 0 to 30V.
6. Record leakage current.
7. Plot V-I curve on graph paper.
8. Determine knee voltage (threshold) and dynamic resistance.",
            result: "V-I characteristics plotted. Forward knee voltage = 0.6-0.7V. Exponential current increase after knee voltage observed. Very small reverse current confirmed.",
            youtubeLink: "https://www.youtube.com/embed/Fwj_d3uO5g8",
            faculty: { name: "Dr. M. Kumar", email: "mkumar@gkv.ac.in", phone: "+91-9823456789", department: "ECE" }
          },
          {
            id: "exp5b", title: "Transistor Characteristics (CE Configuration)",
            aim: "To study the input and output characteristics of a BJT in Common Emitter (CE) configuration.",
            theory: "A Bipolar Junction Transistor (BJT) is a three-terminal device: Base (B), Collector (C), Emitter (E). In CE configuration, emitter is common to both input and output. Input characteristics: IB vs VBE at constant VCE. Output characteristics: IC vs VCE at constant IB. Current gain β (hFE) = IC/IB. CE configuration gives highest voltage gain and power gain. It has 180° phase inversion between input and output.",
            principle: "Transistor action: Small base current controls large collector current. IC = β × IB. In active region, transistor acts as an amplifier. In saturation/cutoff, it acts as a switch.",
            procedure: "1. Rig up CE configuration using BC547 NPN transistor.
2. Input characteristics: Keep VCE = 5V constant. Vary VBE from 0 to 0.8V. Note IB at each step.
3. Repeat for VCE = 10V.
4. Output characteristics: Set IB = 20µA. Vary VCE from 0 to 15V. Note IC.
5. Repeat for IB = 40µA and 60µA.
6. Plot families of curves.
7. Calculate β = IC/IB from active region.",
            result: "Input and output characteristics plotted. Current gain β calculated ≈ 100-200 for BC547. Active, saturation, and cutoff regions identified.",
            youtubeLink: "https://www.youtube.com/embed/7ukDKVHnac4",
            faculty: { name: "Dr. M. Kumar", email: "mkumar@gkv.ac.in", phone: "+91-9823456789", department: "ECE" }
          },
          {
            id: "exp5c", title: "RC Phase Shift Oscillator",
            aim: "To design and construct an RC Phase Shift Oscillator and measure its frequency.",
            theory: "An RC phase shift oscillator uses a transistor amplifier and an RC feedback network that provides 180° phase shift at a specific frequency. The CE amplifier provides 180° phase inversion. The RC ladder network (3 stages) provides another 180° phase shift — total 360° = positive feedback, sustaining oscillations. Frequency of oscillation: f = 1/(2π√6 RC). The Barkhausen criterion must be satisfied: loop gain ≥ 1 and total phase shift = 360°.",
            principle: "Barkhausen Criterion: For sustained oscillations, |Aβ| ≥ 1 and total phase shift around the loop = 0° or 360°. RC network provides 60° phase shift per stage (3 stages × 60° = 180°).",
            procedure: "1. Design RC network: Choose f = 1kHz, C = 0.01µF, calculate R = 1/(2π × f × C × √6).
2. Connect 3-stage RC phase shift network to BC547 CE amplifier.
3. Connect output back to input through RC network.
4. Power the circuit with +12V DC.
5. Observe output on CRO — should be sinusoidal.
6. Measure frequency using CRO time period.
7. Compare measured vs theoretical frequency.",
            result: "Oscillations observed at approximately the designed frequency. Sinusoidal waveform verified on CRO. Barkhausen criterion satisfied.",
            youtubeLink: "https://www.youtube.com/embed/sI8plrpqMoI",
            faculty: { name: "Prof. B. Saxena", email: "bsaxena@gkv.ac.in", phone: "+91-9834012345", department: "ECE" }
          }
        ]
      },
      {
        id: "ec302l", code: "EC-302L", name: "Digital Electronics Lab",
        syllabusPdf: "https://ugcmoocs.inflibnet.ac.in/assets/ugcmoocs/assets/pdf/syllabi/digital-electronics.pdf",
        refFilePdf: "https://www.tutorialspoint.com/digital_circuits/digital_circuits_tutorial.pdf",
        experiments: [
          {
            id: "exp_de1", title: "Logic Gates Verification",
            aim: "To verify truth tables of basic and universal logic gates (AND, OR, NOT, NAND, NOR, XOR, XNOR).",
            theory: "Logic gates are the fundamental building blocks of digital circuits. They perform Boolean operations on binary inputs. AND gate: output is 1 only when all inputs are 1. OR gate: output is 1 when at least one input is 1. NOT gate: inverts input. NAND and NOR are universal gates — any logic circuit can be implemented using only NAND or only NOR gates. XOR: output is 1 when inputs are different. XNOR: output is 1 when inputs are same.",
            principle: "Boolean Algebra governs logic gates. De Morgan's Theorem: (A·B)' = A' + B' and (A+B)' = A'·B'. NAND/NOR universality: any gate can be built from NAND or NOR alone.",
            procedure: "1. Use IC 7408 (AND), 7432 (OR), 7404 (NOT), 7400 (NAND), 7402 (NOR), 7486 (XOR).
2. Connect VCC (+5V) and GND to appropriate pins.
3. Apply input combinations using logic switches.
4. Note output using LED indicator.
5. Verify with truth table for each gate.
6. Implement XOR using only NAND gates — verify equivalence.
7. Implement NOT using single NAND gate.",
            result: "Truth tables of all gates verified experimentally. NAND universality demonstrated by implementing XOR using NAND gates only.",
            youtubeLink: "https://www.youtube.com/embed/gI-qXk7XojA",
            faculty: { name: "Prof. B. Saxena", email: "bsaxena@gkv.ac.in", phone: "+91-9834012345", department: "ECE" }
          },
          {
            id: "exp_de2", title: "Flip-Flop Implementation - SR, D, JK, T",
            aim: "To implement and verify the operation of SR, D, JK, and T flip-flops.",
            theory: "Flip-flops are bistable sequential circuits that can store one bit of information. SR flip-flop has Set (S) and Reset (R) inputs — forbidden state when both S=R=1. D flip-flop (Data flip-flop): output follows input at clock edge — eliminates forbidden state. JK flip-flop: versatile, toggles when J=K=1. T flip-flop (Toggle): output toggles when T=1, holds when T=0. All are synchronous — triggered by clock signal.",
            principle: "Flip-flops are edge-triggered (on rising or falling clock edge). They form the basis of registers, counters, and memory. Characteristic equations: D FF: Q(next) = D; JK FF: Q(next) = JQ' + K'Q; T FF: Q(next) = T⊕Q.",
            procedure: "1. Implement SR flip-flop using NAND gates (IC 7400).
2. Verify SR truth table — test Set, Reset, Hold, and forbidden state.
3. Add clock input to make clocked SR FF.
4. Connect D input as S and D' as R to form D flip-flop.
5. Use IC 7476 for JK flip-flop — test all input combinations.
6. Create T flip-flop from JK by connecting J=K=T.
7. Test toggle behavior at clock edges.",
            result: "All flip-flop types implemented and verified. JK flip-flop's toggle mode demonstrated. Master-slave operation observed.",
            youtubeLink: "https://www.youtube.com/embed/F1OC5e7Tn_o",
            faculty: { name: "Dr. M. Kumar", email: "mkumar@gkv.ac.in", phone: "+91-9823456789", department: "ECE" }
          }
        ]
      }
    ],

    // ── ME SEMESTER 3 ───────────────────────────────────────────────────────
    "ME-3": [
      {
        id: "me301l", code: "ME-301L", name: "Fluid Mechanics Lab",
        syllabusPdf: "https://ugcmoocs.inflibnet.ac.in/assets/ugcmoocs/assets/pdf/syllabi/fluid-mechanics.pdf",
        refFilePdf: "https://www.tutorialspoint.com/fluid_mechanics/fluid_mechanics_tutorial.pdf",
        experiments: [
          {
            id: "exp6", title: "Verification of Bernoulli's Theorem",
            aim: "To verify Bernoulli's theorem using a venturimeter and to determine the discharge coefficient.",
            theory: "Bernoulli's equation states that for steady, incompressible, non-viscous flow along a streamline: P/ρg + V²/2g + z = constant. The three terms represent pressure head, velocity head, and datum head respectively. Their sum is the total head. A venturimeter uses this principle — cross-section reduces causing velocity to increase and pressure to drop, allowing flow measurement. Cd (discharge coefficient) accounts for real fluid effects (friction, turbulence).",
            principle: "Conservation of energy in fluid flow. As velocity increases (narrow section), pressure decreases to maintain constant total energy. P₁ + ½ρV₁² + ρgz₁ = P₂ + ½ρV₂² + ρgz₂",
            procedure: "1. Set up venturimeter with piezometers at inlet and throat.
2. Open inlet valve, allow steady flow.
3. Note piezometer readings h₁ (inlet) and h₂ (throat).
4. Collect water in measuring tank for time t using stopwatch.
5. Calculate actual discharge: Qa = Volume/t.
6. Calculate theoretical discharge using Bernoulli: Qt = A₁A₂√(2g(h₁-h₂)) / √(A₁²-A₂²)
7. Cd = Qa/Qt.
8. Repeat for different flow rates.
9. Plot Qa vs Qt.",
            result: "Bernoulli's theorem verified. Cd values obtained between 0.95-0.98, which matches theoretical range. Total head remained approximately constant.",
            youtubeLink: "https://www.youtube.com/embed/TcMgkU3pFBY",
            faculty: { name: "Prof. S. Rao", email: "srao@gkv.ac.in", phone: "+91-9834567890", department: "ME" }
          },
          {
            id: "exp6b", title: "Flow Through Pipes - Friction Factor",
            aim: "To determine the Darcy-Weisbach friction factor for flow through pipes of different diameters.",
            theory: "When fluid flows through pipes, energy is lost due to friction between the fluid and pipe wall. Darcy-Weisbach equation: hf = f × (L/D) × (V²/2g) where hf is head loss, f is Darcy friction factor, L is pipe length, D is diameter, V is velocity. For laminar flow (Re < 2000): f = 64/Re. For turbulent flow, f depends on Re and relative roughness. Moody chart provides f for all flow regimes.",
            principle: "Reynolds Number Re = ρVD/µ. Laminar flow: Re < 2000, f = 64/Re. Turbulent flow: Re > 4000, f from Moody diagram or Colebrook equation.",
            procedure: "1. Set up pipeline with pressure taps at known distance L apart.
2. Open control valve to establish flow.
3. Read differential pressure using manometer (h₁ - h₂ = hf).
4. Measure flow rate using collecting tank method.
5. Calculate velocity: V = Q/A.
6. Calculate Re = VD/ν.
7. Determine f from Darcy-Weisbach: f = hf × D × 2g / (L × V²).
8. Compare with theoretical value.
9. Repeat for different flow rates.",
            result: "Friction factor determined for laminar and turbulent flows. Results matched Darcy-Weisbach equation within 5% error.",
            youtubeLink: "https://www.youtube.com/embed/4N7bvGEUEm4",
            faculty: { name: "Prof. S. Rao", email: "srao@gkv.ac.in", phone: "+91-9834567890", department: "ME" }
          },
          {
            id: "exp6c", title: "Metacentric Height of a Floating Body",
            aim: "To determine the metacentric height of a floating body experimentally and verify with theory.",
            theory: "A floating body is stable if the metacenter (M) is above the center of gravity (G). Metacentric height GM = BM - BG where BM = I/V (I = second moment of water plane area, V = displaced volume). For a ship to be stable, GM must be positive. Righting moment = W × GM × sin θ. Larger GM → more stable but stiffer (uncomfortable) ride. Naval architects optimize GM for safety and comfort.",
            principle: "For a floating body: GM = (w × x) / (W × tan θ) where w = movable weight, x = distance moved, W = total weight of floating body, θ = angle of tilt.",
            procedure: "1. Fill tank with water. Float the pontoon model.
2. Note initial position (plumb bob at center).
3. Place movable weight at center position.
4. Move weight by distance x (e.g., 5cm intervals).
5. Read angle of tilt θ from the scale.
6. Calculate GM = (w × x) / (W × tan θ).
7. Repeat for different positions of weight.
8. Compare with theoretical GM = BM - BG.",
            result: "Metacentric height measured experimentally. Values matched theoretical calculation within 8%. Stability verified for all positions of movable weight.",
            youtubeLink: "https://www.youtube.com/embed/o2XTer9KGYQ",
            faculty: { name: "Dr. R. Patel", email: "rpatel@gkv.ac.in", phone: "+91-9845123456", department: "ME" }
          }
        ]
      },
      {
        id: "me302l", code: "ME-302L", name: "Engineering Materials Lab",
        syllabusPdf: "https://ugcmoocs.inflibnet.ac.in/assets/ugcmoocs/assets/pdf/syllabi/materials.pdf",
        refFilePdf: "https://www.tutorialspoint.com/materials_science/materials_science_tutorial.pdf",
        experiments: [
          {
            id: "exp_mat1", title: "Tensile Test of Mild Steel",
            aim: "To perform a tensile test on a mild steel specimen and determine mechanical properties.",
            theory: "A tensile test applies uniaxial tensile force to a specimen until fracture. The stress-strain curve reveals: Proportional limit — Hook's law valid (σ = Eε). Elastic limit — maximum stress without permanent deformation. Yield point — material begins to deform plastically (for mild steel: upper and lower yield points visible). Ultimate Tensile Strength (UTS) — maximum stress. Fracture point — specimen breaks. Young's Modulus E = stress/strain in elastic region ≈ 200 GPa for steel.",
            principle: "Hooke's Law: σ = Eε (valid up to proportional limit). Ductility = % elongation or % reduction in area. Toughness = area under stress-strain curve.",
            procedure: "1. Measure initial gauge length (L₀) and diameter of test specimen.
2. Mount specimen in UTM (Universal Testing Machine) grips.
3. Apply tensile load at uniform rate (2mm/min).
4. Record load vs extension using autographic recorder.
5. Note yield point, maximum load, and fracture load.
6. Measure final gauge length (Lf) after fracture.
7. Calculate: Yield strength, UTS, % elongation, % reduction in area.
8. Plot engineering stress-strain curve.",
            result: "Tensile test completed. Yield strength ≈ 250 MPa, UTS ≈ 400 MPa, % elongation ≈ 25% for mild steel specimen. Ductile fracture (cup-cone) observed.",
            youtubeLink: "https://www.youtube.com/embed/D8U4G5kcpcM",
            faculty: { name: "Dr. R. Patel", email: "rpatel@gkv.ac.in", phone: "+91-9845123456", department: "ME" }
          }
        ]
      }
    ],

    // ── EE SEMESTER 3 ───────────────────────────────────────────────────────
    "EE-3": [
      {
        id: "ee301l", code: "EE-301L", name: "Electrical Machines Lab",
        syllabusPdf: "https://ugcmoocs.inflibnet.ac.in/assets/ugcmoocs/assets/pdf/syllabi/electrical-machines.pdf",
        refFilePdf: "https://www.tutorialspoint.com/electrical_machines/electrical_machines_tutorial.pdf",
        experiments: [
          {
            id: "exp7", title: "DC Motor Speed-Torque Characteristics",
            aim: "To study the speed-torque and speed-armature current characteristics of a DC shunt motor.",
            theory: "A DC shunt motor has field winding connected in parallel with armature. Back EMF: Eb = V - IaRa. Speed: N = (V - IaRa) / (kφ). Since field current (and hence flux φ) remains nearly constant in shunt motor, speed varies slightly with load. Torque: T = kφIa. As load increases, Ia increases, speed drops slightly. Shunt motor is called constant speed motor. Applications: lathes, drilling machines, centrifugal pumps.",
            principle: "Fleming's Left-Hand Rule: Force on conductor = BIL. Back EMF regulates motor speed automatically. N ∝ (V - IaRa)/φ. T ∝ φIa.",
            procedure: "1. Connect DC shunt motor with ammeter in armature, voltmeter across supply.
2. Start motor using starter (to limit starting current).
3. Note no-load speed, armature current, field current.
4. Apply load using brake drum in steps.
5. At each load: record speed (rpm via tachometer), armature current (Ia), and torque (T = F × r).
6. Calculate output power = T × ω.
7. Plot N vs T and N vs Ia curves.
8. Determine regulation: Speed Regulation = (No load - Full load speed) / Full load speed × 100%.",
            result: "Speed-torque characteristics obtained. Speed regulation ≈ 5-8% (good for shunt motor). Approximately constant speed confirmed across load range.",
            youtubeLink: "https://www.youtube.com/embed/LAtPHANEfQo",
            faculty: { name: "Dr. N. Gupta", email: "ngupta@gkv.ac.in", phone: "+91-9845678901", department: "EE" }
          },
          {
            id: "exp7b", title: "Single Phase Transformer - OC and SC Tests",
            aim: "To perform Open Circuit (OC) and Short Circuit (SC) tests on a single-phase transformer to determine its equivalent circuit parameters.",
            theory: "A transformer transfers electrical energy between circuits through electromagnetic induction. OC test (low voltage side open): measures core loss (iron loss) Pi and no-load parameters (R₀, X₀). SC test (low voltage side short-circuited): measures copper loss at full load (Pcu) and series parameters (Req, Zeq). These two tests together provide all parameters needed to calculate efficiency and voltage regulation without full-load testing.",
            principle: "OC test: Full voltage, rated frequency, no load — measures core losses. SC test: Reduced voltage (typically 5-10% of rated), rated current flows — measures copper losses. Total losses = core loss + copper loss.",
            procedure: "OC Test:
1. Apply rated LV to primary, keep secondary open.
2. Measure input power W₀, voltage V₀, current I₀.
3. cos φ₀ = W₀/(V₀×I₀). Calculate R₀ = V₁/I_c, X₀ = V₁/I_m.

SC Test:
4. Short-circuit secondary. Apply reduced voltage to primary until rated current flows.
5. Measure Wsc, Vsc, Isc.
6. Calculate: Zeq = Vsc/Isc, Req = Wsc/Isc², Xeq = √(Zeq²-Req²).
7. Calculate efficiency at full load and half load.
8. Calculate voltage regulation.",
            result: "Equivalent circuit parameters determined. Efficiency at full load unity power factor ≈ 96-98%. Voltage regulation calculated.",
            youtubeLink: "https://www.youtube.com/embed/FWDKZ4RbGwg",
            faculty: { name: "Dr. N. Gupta", email: "ngupta@gkv.ac.in", phone: "+91-9845678901", department: "EE" }
          },
          {
            id: "exp7c", title: "Measurement of Three-Phase Power using Two-Wattmeter Method",
            aim: "To measure three-phase power using the two-wattmeter method and verify with direct measurement.",
            theory: "In a three-phase system, total power can be measured using only two wattmeters (Aron's method). This works for balanced or unbalanced loads, star or delta connected. Total Power P = W₁ + W₂. Reactive Power Q = √3(W₁ - W₂). Power Factor cos φ = P / √(P² + Q²). When load is purely resistive: W₁ = W₂. When PF = 0.5: one wattmeter reads zero. When PF < 0.5: one wattmeter deflects backward.",
            principle: "Two-wattmeter method: Current coils carry line currents, pressure coils measure line-to-line voltages. P = W₁ + W₂ always holds regardless of load balance.",
            procedure: "1. Connect two wattmeters W₁ and W₂ in two phases of a three-phase load.
2. Apply 415V three-phase supply to balanced resistive load.
3. Note both wattmeter readings.
4. Calculate P = W₁ + W₂, verify with direct three-phase wattmeter.
5. Repeat with inductive load (add inductors).
6. Note that W₂ may read negative for low PF loads.
7. Calculate power factor from two-wattmeter readings.
8. Plot PF vs (W₁-W₂)/(W₁+W₂).",
            result: "Total three-phase power measured accurately. Results matched direct measurement within 2%. Power factor calculation verified.",
            youtubeLink: "https://www.youtube.com/embed/lmZHAXhvXoQ",
            faculty: { name: "Prof. A. Joshi", email: "ajoshi@gkv.ac.in", phone: "+91-9856789012", department: "EE" }
          }
        ]
      },
      {
        id: "ee302l", code: "EE-302L", name: "Basic Electronics Lab",
        syllabusPdf: "https://ugcmoocs.inflibnet.ac.in/assets/ugcmoocs/assets/pdf/syllabi/basic-electronics.pdf",
        refFilePdf: "https://www.tutorialspoint.com/basic_electronics/basic_electronics_tutorial.pdf",
        experiments: [
          {
            id: "exp_be1", title: "Half Wave and Full Wave Rectifier",
            aim: "To construct half-wave and full-wave rectifiers and study their output with and without filter.",
            theory: "Rectifiers convert AC to DC. Half-wave rectifier: only one half-cycle passes through diode — poor efficiency (40.6%). Full-wave rectifier (centre-tap): uses two diodes, both half-cycles utilized — efficiency 81.2%. Bridge rectifier: uses 4 diodes, no centre-tap transformer needed. Ripple factor r = Vr(rms)/Vdc. Without filter: ripple is high. With capacitor filter: capacitor charges to peak and discharges slowly through load — ripple greatly reduced. Ripple frequency: 50 Hz (HWR), 100 Hz (FWR).",
            principle: "Rectification: Diodes conduct only in forward bias. Filtering: Capacitor stores charge and supplies it during diode off period, smoothing output. η_HWR = 40.6%, η_FWR = 81.2%.",
            procedure: "1. Construct HWR: Connect IN4007 diode in series with secondary of transformer and load.
2. Observe input and output on DSO simultaneously.
3. Measure Vdc and Vac(ripple) with multimeter.
4. Connect capacitor filter (1000µF), observe improved DC.
5. Construct bridge rectifier using 4 diodes.
6. Measure: Vdc, ripple factor = Vripple(rms)/Vdc.
7. Compare HWR vs FWR vs Bridge rectifier performance.",
            result: "HWR efficiency ≈ 40%, FWR efficiency ≈ 80%. Ripple factor reduced significantly with filter capacitor. Bridge rectifier gave highest efficiency.",
            youtubeLink: "https://www.youtube.com/embed/sI8plrpqMoI",
            faculty: { name: "Prof. A. Joshi", email: "ajoshi@gkv.ac.in", phone: "+91-9856789012", department: "EE" }
          }
        ]
      }
    ],

    // ── CSE SEMESTER 1 (Basic) ───────────────────────────────────────────────
    "CSE-1": [
      {
        id: "cs101l", code: "CS-101L", name: "Programming in C Lab",
        syllabusPdf: "https://ugcmoocs.inflibnet.ac.in/assets/ugcmoocs/assets/pdf/syllabi/c-programming.pdf",
        refFilePdf: "https://www.tutorialspoint.com/cprogramming/cprogramming_tutorial.pdf",
        experiments: [
          {
            id: "exp_c1", title: "Simple C Programs - I/O and Arithmetic",
            aim: "To write and execute basic C programs involving input/output operations and arithmetic expressions.",
            theory: "C is a procedural, middle-level programming language developed by Dennis Ritchie at Bell Labs (1972). Every C program must have a main() function. Header files provide function declarations — stdio.h for printf/scanf. Variables must be declared before use. Data types: int (4 bytes), float (4 bytes), double (8 bytes), char (1 byte). printf() uses format specifiers: %d (int), %f (float), %c (char), %s (string). scanf() reads user input.",
            principle: "Compiler translates C source code to machine code. Preprocessor directives (#include) are processed first. Program execution starts from main() and returns an exit code.",
            procedure: "1. Write program to add two numbers: scanf two integers, add them, printf result.
2. Write program to compute area of circle: A = πr².
3. Write program to convert Celsius to Fahrenheit: F = (C × 9/5) + 32.
4. Write program to find simple interest: SI = P × R × T / 100.
5. Write program to swap two numbers without third variable.
6. Compile using gcc: gcc program.c -o output
7. Run and verify output.",
            result: "All basic C programs compiled and executed successfully. Input/output and arithmetic operations verified.",
            youtubeLink: "https://www.youtube.com/embed/KnvbUiSr1_c",
            faculty: { name: "Prof. M. Tripathi", email: "mtripathi@gkv.ac.in", phone: "+91-9801234567", department: "CSE" }
          },
          {
            id: "exp_c2", title: "Control Structures - if-else, loops, switch",
            aim: "To implement control flow structures in C: conditional statements and loops.",
            theory: "Control structures alter the sequential flow of program execution. Conditional: if-else selects between alternatives based on boolean condition. switch-case provides multi-way branching. Loops: for loop — counter controlled (known iterations). while loop — condition controlled (pre-test). do-while loop — condition controlled (post-test, executes at least once). break exits loop. continue skips to next iteration. Nested loops enable 2D patterns and matrix operations.",
            principle: "Structured programming: using sequence, selection, and iteration constructs. Any algorithm can be expressed using these three fundamental control structures (Böhm-Jacopini theorem).",
            procedure: "1. if-else: Check if a number is positive, negative, or zero.
2. if-else ladder: Grade calculator (marks → A/B/C/D/F).
3. switch-case: Calculator with +, -, *, / operations.
4. for loop: Print multiplication table of a number.
5. while loop: Reverse a number. Find factorial.
6. do-while: Menu-driven program.
7. Nested loop: Print star patterns (triangle, pyramid).
8. break and continue: Skip even numbers in range.",
            result: "All control structures implemented and tested successfully. Programs produced correct outputs for various inputs including edge cases.",
            youtubeLink: "https://www.youtube.com/embed/aHR3sAbbFMw",
            faculty: { name: "Prof. M. Tripathi", email: "mtripathi@gkv.ac.in", phone: "+91-9801234567", department: "CSE" }
          }
        ]
      }
    ]
  },

  theorySubjects: {

    // ── CSE SEMESTER 3 ──────────────────────────────────────────────────────
    "CSE-3": [
      {
        id: "cs301t", code: "CS-301", name: "Data Structures & Algorithms",
        books: [
          "Introduction to Algorithms (CLRS) - Cormen, Leiserson, Rivest, Stein",
          "Data Structures Using C - Seymour Lipschutz",
          "Data Structures and Algorithm Analysis in C - Mark Allen Weiss",
          "Algorithms in C++ - Robert Sedgewick",
          "The Algorithm Design Manual - Steven Skiena"
        ],
        documents: [
          { name: "Unit 1 - Arrays, Linked Lists & Stacks", url: "https://www.cs.cmu.edu/~fp/courses/15122-f10/lectures/11-linkedlists.pdf" },
          { name: "Unit 2 - Trees, BST & Heaps", url: "https://web.stanford.edu/class/cs166/lectures/01/Small01.pdf" },
          { name: "Unit 3 - Graphs & BFS/DFS", url: "https://www.cs.princeton.edu/courses/archive/spr06/cos423/Lectures/dfs.pdf" },
          { name: "Unit 4 - Sorting Algorithms Comparison", url: "https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html" }
        ],
        notes: "Focus heavily on time & space complexity analysis. Practice Big-O problems daily. GATE 2024 had 8 questions from DSA. Use GeeksForGeeks and LeetCode for practice. Implement every data structure from scratch before exam."
      },
      {
        id: "cs302t", code: "CS-302", name: "Object-Oriented Programming (Java)",
        books: [
          "Head First Java - Kathy Sierra & Bert Bates",
          "Java: The Complete Reference - Herbert Schildt",
          "Effective Java - Joshua Bloch",
          "Core Java Volume I - Cay Horstmann"
        ],
        documents: [
          { name: "OOP Concepts - Complete Notes (GKV)", url: "https://www.tutorialspoint.com/java/java_tutorial.pdf" },
          { name: "Java Collections Framework", url: "https://docs.oracle.com/javase/8/docs/technotes/guides/collections/overview.html" },
          { name: "Exception Handling & Multithreading", url: "https://www.tutorialspoint.com/java/java_tutorial.pdf" }
        ],
        notes: "Java is purely OOP. Master the 4 pillars: Encapsulation, Inheritance, Polymorphism, Abstraction. Interfaces and abstract classes are frequently asked in exams. Practice Java programs daily."
      },
      {
        id: "cs303t", code: "CS-303", name: "Database Management Systems",
        books: [
          "Database System Concepts - Silberschatz, Korth & Sudarshan",
          "An Introduction to Database Systems - C.J. Date",
          "Fundamentals of Database Systems - Elmasri & Navathe"
        ],
        documents: [
          { name: "ER Diagrams and Relational Model", url: "https://www.tutorialspoint.com/dbms/dbms_tutorial.pdf" },
          { name: "SQL Complete Reference Guide", url: "https://www.tutorialspoint.com/sql/sql_tutorial.pdf" },
          { name: "Normalization - 1NF to BCNF", url: "https://www.cs.sfu.ca/CourseCentral/354/jpei/slides/normalization.pdf" }
        ],
        notes: "DBMS is high-scoring. Master SQL queries (JOINs, subqueries, GROUP BY). Normalization theory (1NF to BCNF) is very important. Draw ER diagrams for practice. Transaction management (ACID) is also important."
      },
      {
        id: "cs304t", code: "CS-304", name: "Discrete Mathematics",
        books: [
          "Discrete Mathematics and Its Applications - Kenneth H. Rosen",
          "Discrete Mathematics - Tremblay & Manohar",
          "Elements of Discrete Mathematics - C.L. Liu"
        ],
        documents: [
          { name: "Logic, Sets and Functions", url: "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/pages/readings/" },
          { name: "Graph Theory Notes", url: "https://www.geeksforgeeks.org/graph-theory-set-1-introduction/" },
          { name: "Combinatorics and Probability", url: "https://www.tutorialspoint.com/discrete_mathematics/discrete_mathematics_tutorial.pdf" }
        ],
        notes: "Discrete Maths forms the theoretical foundation of CS. Important topics: Logic (propositions, predicates), Set theory, Relations, Functions, Graph theory, Trees, Counting (permutations/combinations), Probability."
      }
    ],

    // ── CSE SEMESTER 5 ──────────────────────────────────────────────────────
    "CSE-5": [
      {
        id: "cs501t", code: "CS-501", name: "Operating Systems",
        books: [
          "Operating System Concepts (Dinosaur Book) - Silberschatz, Galvin & Gagne",
          "Modern Operating Systems - Andrew S. Tanenbaum",
          "Operating Systems: Internals and Design Principles - William Stallings"
        ],
        documents: [
          { name: "Process Management & Scheduling", url: "https://www.tutorialspoint.com/operating_system/operating_system_tutorial.pdf" },
          { name: "Memory Management & Virtual Memory", url: "https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/9_VirtualMemory.html" },
          { name: "File Systems & I/O Management", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/file-intro.pdf" }
        ],
        notes: "OS is a GATE favourite — 8-10 marks every year. Master CPU scheduling (FCFS, SJF, Round Robin, Priority), Deadlock (conditions, detection, prevention), Memory management (paging, segmentation), and File systems."
      },
      {
        id: "cs502t", code: "CS-502", name: "Computer Networks",
        books: [
          "Computer Networks - Andrew S. Tanenbaum",
          "Data Communications and Networking - Behrouz Forouzan",
          "Computer Networking: A Top-Down Approach - Kurose & Ross"
        ],
        documents: [
          { name: "OSI and TCP/IP Model", url: "https://www.tutorialspoint.com/computer_fundamentals/computer_fundamentals_tutorial.pdf" },
          { name: "Data Link Layer - MAC Protocols", url: "https://www.cs.vu.nl/~ast/books/cn5/slides/Chapter4.pdf" },
          { name: "Network Layer - IP, Routing", url: "https://www.cs.vu.nl/~ast/books/cn5/slides/Chapter5.pdf" }
        ],
        notes: "Networks is critical for placements (cloud, networking roles). Study OSI layers thoroughly. IP addressing and subnetting is very important. TCP vs UDP differences. HTTP, DNS, FTP protocols must be understood."
      }
    ],

    // ── ECE SEMESTER 3 ──────────────────────────────────────────────────────
    "ECE-3": [
      {
        id: "ec301t", code: "EC-301", name: "Analog Electronics",
        books: [
          "Electronic Devices and Circuit Theory - Boylestad & Nashelsky",
          "Microelectronics Circuits - Sedra & Smith",
          "Electronic Devices - Floyd",
          "Fundamentals of Analog Circuits - Thomas Floyd"
        ],
        documents: [
          { name: "Diodes and Rectifier Circuits", url: "https://www.tutorialspoint.com/electronic_circuits/electronic_circuits_tutorial.pdf" },
          { name: "Transistor Biasing and Amplifiers", url: "https://www.electronics-tutorials.ws/amplifier/amp_1.html" },
          { name: "Operational Amplifiers - Complete Guide", url: "https://www.allaboutcircuits.com/textbook/semiconductors/chpt-8/introduction-operational-amplifiers/" }
        ],
        notes: "Analog Electronics is the foundation of ECE. Focus on diode circuits, BJT biasing (fixed bias, voltage divider bias), FET amplifiers, Op-Amp applications (inverting, non-inverting, integrator, differentiator). H-parameters are frequently asked."
      },
      {
        id: "ec302t", code: "EC-302", name: "Digital Electronics",
        books: [
          "Digital Design - Morris Mano",
          "Digital Electronics - Tokheim",
          "Fundamentals of Digital Circuits - A. Anand Kumar"
        ],
        documents: [
          { name: "Boolean Algebra and Logic Gates", url: "https://www.tutorialspoint.com/digital_circuits/digital_circuits_tutorial.pdf" },
          { name: "Combinational Circuits - Mux, Decoder", url: "https://www.electronics-tutorials.ws/combination/comb_1.html" },
          { name: "Sequential Circuits - Flip-Flops, Counters", url: "https://www.electronics-tutorials.ws/sequential/seq_1.html" }
        ],
        notes: "Digital Electronics has high weightage in GATE ECE. Focus on K-map minimization, combinational circuits (adder, multiplexer, decoder), sequential circuits (flip-flops, counters, shift registers). Logic families (TTL, CMOS) and their comparison."
      },
      {
        id: "ec303t", code: "EC-303", name: "Signals and Systems",
        books: [
          "Signals and Systems - Alan Oppenheim & Alan Willsky",
          "Signals and Systems - Simon Haykin",
          "Principles of Signal Processing - Proakis & Manolakis"
        ],
        documents: [
          { name: "Continuous Time Signals & LTI Systems", url: "https://ocw.mit.edu/courses/res-6-007-signals-and-systems-spring-2011/pages/lecture-notes/" },
          { name: "Fourier Series and Transform", url: "https://www.tutorialspoint.com/signals_and_systems/signals_and_systems_tutorial.pdf" },
          { name: "Laplace and Z-Transform", url: "https://ocw.mit.edu/courses/res-6-007-signals-and-systems-spring-2011/pages/lecture-notes/" }
        ],
        notes: "Signals & Systems is the most mathematical subject in ECE. Master Fourier Series, Fourier Transform, Laplace Transform, Z-Transform. BIBO stability, convolution, and system properties (linearity, time-invariance, causality) are very important."
      }
    ],

    // ── ME SEMESTER 3 ───────────────────────────────────────────────────────
    "ME-3": [
      {
        id: "me301t", code: "ME-301", name: "Fluid Mechanics",
        books: [
          "Fluid Mechanics - Frank White",
          "Fluid Mechanics and Hydraulic Machines - R.K. Bansal",
          "Engineering Fluid Mechanics - Elger, Williams, Crowe",
          "Introduction to Fluid Mechanics - Fox & McDonald"
        ],
        documents: [
          { name: "Fluid Properties and Statics", url: "https://www.tutorialspoint.com/fluid_mechanics/fluid_mechanics_tutorial.pdf" },
          { name: "Fluid Kinematics and Bernoulli Equation", url: "https://nptel.ac.in/content/storage2/courses/112103021/modules/lec1/images/lec1.pdf" },
          { name: "Flow Through Pipes and Hydraulic Machines", url: "https://www.tutorialspoint.com/fluid_mechanics/fluid_mechanics_tutorial.pdf" }
        ],
        notes: "Fluid Mechanics forms the basis of hydraulic engineering. Important topics: Fluid properties (viscosity, surface tension), Fluid statics (pressure, buoyancy), Bernoulli's equation and applications, Reynolds number, Flow through pipes (Darcy-Weisbach equation), Centrifugal pumps and turbines."
      },
      {
        id: "me302t", code: "ME-302", name: "Engineering Thermodynamics",
        books: [
          "Thermodynamics: An Engineering Approach - Cengel & Boles",
          "Engineering Thermodynamics - P.K. Nag",
          "Classical Thermodynamics - Rogers & Mayhew"
        ],
        documents: [
          { name: "Laws of Thermodynamics", url: "https://nptel.ac.in/content/storage2/courses/112104113/lecture1.pdf" },
          { name: "Power Cycles - Carnot, Rankine, Brayton", url: "https://www.tutorialspoint.com/thermodynamics/thermodynamics_tutorial.pdf" },
          { name: "Properties of Steam - Steam Tables", url: "https://www.engineeringtoolbox.com/steam-tables-d_980.html" }
        ],
        notes: "Thermodynamics is fundamental to ME. Study all four laws. Master steam power cycles (Rankine cycle), refrigeration cycles, IC engine cycles (Otto, Diesel). Entropy concept is crucial. Use steam tables confidently."
      },
      {
        id: "me303t", code: "ME-303", name: "Theory of Machines",
        books: [
          "Theory of Machines - S.S. Rattan",
          "Theory of Machines - Rattan & Khurmi",
          "Mechanisms and Machine Theory - Shigley"
        ],
        documents: [
          { name: "Mechanisms - Kinematics of Links", url: "https://www.tutorialspoint.com/theory_of_machines/theory_of_machines_tutorial.pdf" },
          { name: "Gear Trains and Cams", url: "https://nptel.ac.in/courses/112/107/112107063/" },
          { name: "Governors and Gyroscopes", url: "https://www.tutorialspoint.com/theory_of_machines/theory_of_machines_tutorial.pdf" }
        ],
        notes: "Theory of Machines deals with the dynamics and kinematics of mechanical systems. Important topics: velocity and acceleration analysis, gear trains (simple, compound, epicyclic), cams and followers, flywheel and governors, balancing of rotating masses."
      }
    ],

    // ── EE SEMESTER 3 ───────────────────────────────────────────────────────
    "EE-3": [
      {
        id: "ee301t", code: "EE-301", name: "Electrical Machines",
        books: [
          "Electric Machinery - Fitzgerald, Kingsley & Umans",
          "Electrical Machines - I.J. Nagrath & D.P. Kothari",
          "Theory of AC Machines - A.E. Fitzgerald",
          "Electric Machines - M.G. Say"
        ],
        documents: [
          { name: "DC Machines - Generators and Motors", url: "https://www.tutorialspoint.com/electrical_machines/electrical_machines_tutorial.pdf" },
          { name: "Transformers - Construction and Working", url: "https://www.electricaleasy.com/2014/03/transformer-basic-working-principle.html" },
          { name: "Induction Motors - Complete Notes", url: "https://www.tutorialspoint.com/electrical_machines/electrical_machines_tutorial.pdf" }
        ],
        notes: "Electrical Machines is the core subject of EE. Master DC machines (construction, types, characteristics), Transformers (equivalent circuit, OC/SC tests, efficiency, voltage regulation), Induction motors (slip, torque-slip characteristics), Synchronous machines (infinite bus, power angle equation)."
      },
      {
        id: "ee302t", code: "EE-302", name: "Circuit Theory",
        books: [
          "Engineering Circuit Analysis - Hayt, Kemmerly & Durbin",
          "Electric Circuits - Nilsson & Riedel",
          "Network Analysis - Van Valkenburg",
          "Circuits and Networks - A. Sudhakar & S.S. Palli"
        ],
        documents: [
          { name: "KCL, KVL and Network Theorems", url: "https://www.tutorialspoint.com/network_theory/network_theory_tutorial.pdf" },
          { name: "AC Circuits - Phasors and Resonance", url: "https://www.allaboutcircuits.com/textbook/alternating-current/" },
          { name: "Two-Port Networks and Filters", url: "https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/pages/readings/" }
        ],
        notes: "Circuit Theory (Network Analysis) is fundamental to EE and ECE. Focus on: Network theorems (Thevenin, Norton, Superposition, Maximum Power Transfer), Transient analysis (RL, RC, RLC circuits), AC steady state analysis (phasors, impedance, resonance), Two-port network parameters (Z, Y, h, ABCD)."
      },
      {
        id: "ee303t", code: "EE-303", name: "Power Systems",
        books: [
          "Elements of Power Systems - J.B. Gupta",
          "Power System Engineering - Nagrath & Kothari",
          "Principles of Power System - V.K. Mehta"
        ],
        documents: [
          { name: "Power System Components and Transmission Lines", url: "https://www.tutorialspoint.com/power_systems/power_systems_tutorial.pdf" },
          { name: "Load Flow Analysis and Fault Calculations", url: "https://nptel.ac.in/courses/108/105/108105040/" },
          { name: "Protection Systems and Circuit Breakers", url: "https://www.tutorialspoint.com/power_systems/power_systems_tutorial.pdf" }
        ],
        notes: "Power Systems is essential for power sector jobs (NTPC, PGCIL, BHEL). Study: Transmission line parameters (ABCD parameters), Per unit system, Load flow methods (Gauss-Seidel, Newton-Raphson), Symmetrical and unsymmetrical fault analysis, Protection (relays, circuit breakers)."
      }
    ],

    // ── CSE SEMESTER 1 ───────────────────────────────────────────────────────
    "CSE-1": [
      {
        id: "cs101t", code: "CS-101", name: "Programming in C",
        books: [
          "The C Programming Language - Kernighan & Ritchie (K&R)",
          "Programming in ANSI C - E. Balagurusamy",
          "Let Us C - Yashavant Kanetkar",
          "C Programming: A Modern Approach - K.N. King"
        ],
        documents: [
          { name: "C Basics - Variables, Data Types, Operators", url: "https://www.tutorialspoint.com/cprogramming/cprogramming_tutorial.pdf" },
          { name: "Pointers and Dynamic Memory Allocation", url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/C(2f)Pointers.html" },
          { name: "File Handling in C", url: "https://www.tutorialspoint.com/cprogramming/c_file_io.htm" }
        ],
        notes: "C is the gateway to programming. Start with basic I/O, then control structures, then functions and arrays. Pointers are the trickiest part — practice pointer programs daily. String handling functions (strlen, strcpy, strcat) are frequently asked."
      },
      {
        id: "cs102t", code: "MA-101", name: "Engineering Mathematics - I",
        books: [
          "Higher Engineering Mathematics - B.S. Grewal",
          "Advanced Engineering Mathematics - Erwin Kreyszig",
          "Engineering Mathematics - N.P. Bali"
        ],
        documents: [
          { name: "Matrices and Linear Algebra", url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/pages/readings/" },
          { name: "Differential Calculus", url: "https://www.tutorialspoint.com/calculus/calculus_tutorial.pdf" },
          { name: "Integral Calculus and Differential Equations", url: "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/pages/readings/" }
        ],
        notes: "Maths forms the foundation of all engineering. Important for GATE. Key topics: Matrices (eigenvalues, eigenvectors), Calculus (limits, derivatives, integration techniques), Differential equations (first order, second order), Numerical methods."
      }
    ]
  }
};

// ─── ICONS ───────────────────────────────────────────────────────────────────
const Icon = ({ name, size = 20, color = "currentColor" }) => {
  const icons = {
    flask: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M9 3h6M9 3v7l-4 10h14L21 10V3"/><path d="M9 3H6l-.5 1"/><path d="M15 3h3l.5 1"/></svg>,
    book: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
    search: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
    chevronRight: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>,
    chevronLeft: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>,
    download: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
    play: <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
    user: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    shield: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    plus: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
    edit: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
    trash: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>,
    logout: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>,
    home: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    bookmark: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>,
    bookmarkFilled: <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>,
    moon: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>,
    sun: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>,
    clock: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    file: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
    x: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
    check: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>,
    grid: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
    beaker: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M4.5 3h15"/><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"/><path d="M6 14h12"/></svg>,
    mail: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    phone: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.52 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
    alert: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
    save: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>,
  };
  return icons[name] || null;
};

// ─── THEME ───────────────────────────────────────────────────────────────────
const getTheme = (dark) => ({
  bg: dark ? "#0f1117" : "#f0f4ff",
  card: dark ? "#1a1f2e" : "#ffffff",
  cardBorder: dark ? "#2a3040" : "#e2e8f0",
  primary: "#4f46e5",
  primaryLight: dark ? "#312e6e" : "#ede9fe",
  accent: "#06b6d4",
  accentLight: dark ? "#0c3547" : "#ecfeff",
  success: "#10b981",
  warning: "#f59e0b",
  danger: "#ef4444",
  text: dark ? "#e2e8f0" : "#1e293b",
  textSub: dark ? "#94a3b8" : "#64748b",
  textMuted: dark ? "#64748b" : "#94a3b8",
  navBg: dark ? "#111827" : "#ffffff",
  inputBg: dark ? "#1e2535" : "#f8fafc",
  inputBorder: dark ? "#2d3748" : "#e2e8f0",
  shadow: dark ? "0 4px 20px rgba(0,0,0,0.4)" : "0 4px 20px rgba(79,70,229,0.08)",
  gradient: dark
    ? "linear-gradient(135deg, #1a1f2e 0%, #0f1117 100%)"
    : "linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 100%)",
  splashGrad: "linear-gradient(135deg, #4338ca 0%, #0891b2 100%)",
});

// ─── STORAGE HELPER ──────────────────────────────────────────────────────────
const storage = {
  get: (k, def) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : def; } catch { return def; } },
  set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function GKVTechLabs() {
  const [dark, setDark] = useState(() => storage.get("dark", false));
  const [screen, setScreen] = useState("splash");
  const [branch, setBranch] = useState(null);
  const [semester, setSemester] = useState(null);
  const [activeTab, setActiveTab] = useState("lab");
  const [selectedLabSubject, setSelectedLabSubject] = useState(null);
  const [selectedExperiment, setSelectedExperiment] = useState(null);
  const [selectedTheorySubject, setSelectedTheorySubject] = useState(null);
  const [adminLoggedIn, setAdminLoggedIn] = useState(() => storage.get("adminLoggedIn", false));
  const [adminTab, setAdminTab] = useState("labs");
  const [searchQuery, setSearchQuery] = useState("");
  const [bookmarks, setBookmarks] = useState(() => storage.get("bookmarks", []));
  const [recentlyViewed, setRecentlyViewed] = useState(() => storage.get("recentlyViewed", []));
  const [data, setData] = useState(() => storage.get("gkvData", INITIAL_DATA));
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  const t = getTheme(dark);

  useEffect(() => { storage.set("dark", dark); }, [dark]);
  useEffect(() => { storage.set("bookmarks", bookmarks); }, [bookmarks]);
  useEffect(() => { storage.set("recentlyViewed", recentlyViewed); }, [recentlyViewed]);
  useEffect(() => { storage.set("gkvData", data); }, [data]);
  useEffect(() => { storage.set("adminLoggedIn", adminLoggedIn); }, [adminLoggedIn]);

  // Splash auto-advance
  useEffect(() => {
    if (screen === "splash") {
      const t = setTimeout(() => setScreen("branch"), 2200);
      return () => clearTimeout(t);
    }
  }, [screen]);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fakeLoad = (cb) => {
    setLoading(true);
    setTimeout(() => { setLoading(false); cb(); }, 600);
  };

  const addRecent = (item) => {
    setRecentlyViewed(prev => {
      const filtered = prev.filter(r => r.id !== item.id);
      return [item, ...filtered].slice(0, 10);
    });
  };

  const toggleBookmark = (exp) => {
    setBookmarks(prev => {
      const exists = prev.find(b => b.id === exp.id);
      if (exists) { showToast("Bookmark removed"); return prev.filter(b => b.id !== exp.id); }
      showToast("Bookmarked!"); return [exp, ...prev];
    });
  };

  const isBookmarked = (id) => bookmarks.some(b => b.id === id);

  const labKey = branch && semester ? `${branch}-${semester}` : null;
  const labSubjects = labKey ? (data.labSubjects[labKey] || []) : [];
  const theorySubjects = labKey ? (data.theorySubjects[labKey] || []) : [];

  // Search across all data
  const searchResults = searchQuery.length > 1 ? (() => {
    const q = searchQuery.toLowerCase();
    const results = [];
    Object.entries(data.labSubjects).forEach(([key, subjects]) => {
      subjects.forEach(s => {
        if (s.name.toLowerCase().includes(q) || s.code.toLowerCase().includes(q))
          results.push({ type: "lab", subject: s, key });
        s.experiments.forEach(e => {
          if (e.title.toLowerCase().includes(q) || e.aim.toLowerCase().includes(q))
            results.push({ type: "exp", exp: e, subject: s, key });
        });
      });
    });
    Object.entries(data.theorySubjects).forEach(([key, subjects]) => {
      subjects.forEach(s => {
        if (s.name.toLowerCase().includes(q) || s.code.toLowerCase().includes(q))
          results.push({ type: "theory", subject: s, key });
      });
    });
    return results.slice(0, 12);
  })() : [];

  // ─── CSS ───────────────────────────────────────────────────────────────────
  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-thumb { background: ${t.primary}44; border-radius: 4px; }
    .app { min-height: 100vh; background: ${t.bg}; color: ${t.text}; transition: all 0.3s; }
    .splash { min-height: 100vh; background: ${t.splashGrad}; display: flex; flex-direction: column; align-items: center; justify-content: center; animation: fadeIn 0.5s ease; }
    .splash-logo { width: 90px; height: 90px; background: rgba(255,255,255,0.15); border-radius: 28px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; backdrop-filter: blur(10px); border: 2px solid rgba(255,255,255,0.3); animation: popIn 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.3s both; }
    .splash h1 { color: white; font-size: 32px; font-weight: 800; letter-spacing: -0.5px; animation: slideUp 0.6s ease 0.5s both; }
    .splash p { color: rgba(255,255,255,0.75); font-size: 14px; margin-top: 8px; animation: slideUp 0.6s ease 0.7s both; }
    .splash-bar { width: 200px; height: 3px; background: rgba(255,255,255,0.2); border-radius: 2px; margin-top: 48px; overflow: hidden; animation: slideUp 0.6s ease 0.9s both; }
    .splash-progress { height: 100%; background: white; border-radius: 2px; animation: progress 2s ease forwards; }
    .screen { padding: 0 0 80px; min-height: 100vh; }
    .header { background: ${t.navBg}; border-bottom: 1px solid ${t.cardBorder}; padding: 12px 20px; display: flex; align-items: center; gap: 12px; position: sticky; top: 0; z-index: 100; box-shadow: ${t.shadow}; }
    .header-title { font-size: 17px; font-weight: 700; color: ${t.text}; flex: 1; }
    .header-sub { font-size: 12px; color: ${t.textSub}; }
    .back-btn { background: ${t.primaryLight}; border: none; border-radius: 10px; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: ${t.primary}; flex-shrink: 0; }
    .icon-btn { background: ${t.primaryLight}; border: none; border-radius: 10px; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: ${t.primary}; }
    .section-header { padding: 20px 20px 12px; }
    .section-title { font-size: 22px; font-weight: 800; color: ${t.text}; }
    .section-sub { font-size: 13px; color: ${t.textSub}; margin-top: 3px; }
    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; padding: 0 20px; }
    .grid-1 { display: flex; flex-direction: column; gap: 10px; padding: 0 20px; }
    .branch-card { background: ${t.card}; border: 2px solid ${t.cardBorder}; border-radius: 18px; padding: 24px 16px; text-align: center; cursor: pointer; transition: all 0.2s; }
    .branch-card:hover, .branch-card:active { border-color: ${t.primary}; background: ${t.primaryLight}; transform: translateY(-2px); }
    .branch-icon { width: 52px; height: 52px; background: ${t.primaryLight}; border-radius: 14px; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; color: ${t.primary}; font-size: 22px; font-weight: 800; }
    .branch-name { font-size: 16px; font-weight: 700; color: ${t.text}; }
    .branch-full { font-size: 11px; color: ${t.textSub}; margin-top: 3px; }
    .sem-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; padding: 0 20px; }
    .sem-card { background: ${t.card}; border: 2px solid ${t.cardBorder}; border-radius: 14px; padding: 16px 8px; text-align: center; cursor: pointer; transition: all 0.2s; }
    .sem-card:hover { border-color: ${t.primary}; background: ${t.primaryLight}; }
    .sem-num { font-size: 22px; font-weight: 800; color: ${t.primary}; }
    .sem-label { font-size: 10px; color: ${t.textSub}; font-weight: 600; letter-spacing: 0.3px; }
    .tab-bar { display: flex; background: ${t.navBg}; border-bottom: 1px solid ${t.cardBorder}; position: sticky; top: 60px; z-index: 90; }
    .tab { flex: 1; padding: 13px; text-align: center; font-size: 13px; font-weight: 600; color: ${t.textSub}; border: none; background: none; cursor: pointer; border-bottom: 2.5px solid transparent; transition: all 0.2s; display: flex; align-items: center; justify-content: center; gap: 6px; }
    .tab.active { color: ${t.primary}; border-bottom-color: ${t.primary}; }
    .subject-card { background: ${t.card}; border: 1.5px solid ${t.cardBorder}; border-radius: 16px; padding: 16px; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 14px; }
    .subject-card:hover { border-color: ${t.primary}; box-shadow: ${t.shadow}; transform: translateY(-1px); }
    .subject-icon { width: 46px; height: 46px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .subject-code { font-size: 11px; font-weight: 700; color: ${t.textSub}; letter-spacing: 0.5px; font-family: 'JetBrains Mono', monospace; }
    .subject-name { font-size: 15px; font-weight: 700; color: ${t.text}; margin-top: 2px; }
    .pill { display: inline-flex; align-items: center; gap: 4px; background: ${t.primaryLight}; color: ${t.primary}; border-radius: 20px; padding: 4px 10px; font-size: 11px; font-weight: 700; }
    .exp-card { background: ${t.card}; border: 1.5px solid ${t.cardBorder}; border-radius: 14px; padding: 14px 16px; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 12px; }
    .exp-card:hover { border-color: ${t.accent}; box-shadow: 0 4px 16px ${t.accent}22; }
    .exp-num { width: 32px; height: 32px; border-radius: 8px; background: ${t.accentLight}; color: ${t.accent}; font-size: 13px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .action-card { background: ${t.card}; border: 1.5px solid ${t.cardBorder}; border-radius: 14px; padding: 14px 16px; display: flex; align-items: center; gap: 12px; text-decoration: none; cursor: pointer; transition: all 0.2s; }
    .action-card:hover { border-color: ${t.primary}; }
    .action-icon { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .detail-section { background: ${t.card}; border: 1.5px solid ${t.cardBorder}; border-radius: 16px; padding: 18px; margin: 0 20px 14px; }
    .detail-label { font-size: 11px; font-weight: 700; color: ${t.textSub}; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 8px; }
    .detail-text { font-size: 14px; color: ${t.text}; line-height: 1.7; white-space: pre-wrap; }
    .video-frame { width: 100%; aspect-ratio: 16/9; border-radius: 12px; border: none; background: #000; }
    .faculty-row { display: flex; align-items: center; gap: 8px; padding: 6px 0; }
    .search-bar { display: flex; align-items: center; gap: 10px; background: ${t.inputBg}; border: 1.5px solid ${t.inputBorder}; border-radius: 14px; padding: 10px 14px; margin: 12px 20px; }
    .search-bar input { background: none; border: none; outline: none; color: ${t.text}; font-size: 14px; flex: 1; font-family: inherit; }
    .search-bar input::placeholder { color: ${t.textMuted}; }
    .search-result { background: ${t.card}; border: 1.5px solid ${t.cardBorder}; border-radius: 12px; padding: 12px 14px; margin: 0 20px 8px; cursor: pointer; }
    .bottom-nav { position: fixed; bottom: 0; left: 0; right: 0; background: ${t.navBg}; border-top: 1px solid ${t.cardBorder}; display: flex; z-index: 200; max-width: 600px; margin: 0 auto; }
    .nav-item { flex: 1; padding: 10px 4px 14px; display: flex; flex-direction: column; align-items: center; gap: 3px; cursor: pointer; border: none; background: none; color: ${t.textSub}; font-size: 10px; font-weight: 600; transition: all 0.2s; }
    .nav-item.active { color: ${t.primary}; }
    .admin-card { background: ${t.card}; border: 1.5px solid ${t.cardBorder}; border-radius: 14px; padding: 16px; margin: 0 20px 10px; }
    .input-field { background: ${t.inputBg}; border: 1.5px solid ${t.inputBorder}; border-radius: 10px; padding: 10px 14px; color: ${t.text}; font-size: 14px; font-family: inherit; width: 100%; outline: none; transition: border-color 0.2s; }
    .input-field:focus { border-color: ${t.primary}; }
    textarea.input-field { resize: vertical; min-height: 80px; }
    .btn-primary { background: ${t.primary}; color: white; border: none; border-radius: 12px; padding: 12px 20px; font-size: 14px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 8px; justify-content: center; transition: opacity 0.2s; font-family: inherit; }
    .btn-primary:hover { opacity: 0.9; }
    .btn-danger { background: ${t.danger}; color: white; border: none; border-radius: 10px; padding: 8px 14px; font-size: 13px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 6px; font-family: inherit; }
    .btn-secondary { background: ${t.inputBg}; color: ${t.text}; border: 1.5px solid ${t.inputBorder}; border-radius: 10px; padding: 8px 14px; font-size: 13px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 6px; font-family: inherit; }
    .toast { position: fixed; bottom: 90px; left: 50%; transform: translateX(-50%); background: ${t.text}; color: ${t.bg}; padding: 10px 18px; border-radius: 20px; font-size: 13px; font-weight: 600; z-index: 1000; animation: slideUp 0.3s ease; white-space: nowrap; box-shadow: 0 4px 20px rgba(0,0,0,0.3); }
    .toast.error { background: ${t.danger}; color: white; }
    .toast.success { background: ${t.success}; color: white; }
    .empty-state { text-align: center; padding: 60px 20px; color: ${t.textMuted}; }
    .empty-state p { margin-top: 12px; font-size: 14px; }
    .loading { display: flex; justify-content: center; align-items: center; padding: 40px; }
    .spinner { width: 32px; height: 32px; border: 3px solid ${t.primaryLight}; border-top-color: ${t.primary}; border-radius: 50%; animation: spin 0.8s linear infinite; }
    .badge { font-size: 10px; font-weight: 700; padding: 3px 8px; border-radius: 20px; }
    .badge-lab { background: ${t.accentLight}; color: ${t.accent}; }
    .badge-theory { background: ${t.primaryLight}; color: ${t.primary}; }
    .badge-exp { background: ${dark ? "#2d3a2d" : "#d1fae5"}; color: ${t.success}; }
    .info-banner { background: ${t.primaryLight}; border-left: 4px solid ${t.primary}; border-radius: 0 12px 12px 0; padding: 12px 14px; margin: 0 20px 16px; }
    .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 500; display: flex; align-items: flex-end; }
    .modal { background: ${t.card}; border-radius: 24px 24px 0 0; padding: 24px 20px; width: 100%; max-height: 90vh; overflow-y: auto; }
    .modal-handle { width: 40px; height: 4px; background: ${t.cardBorder}; border-radius: 2px; margin: 0 auto 20px; }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes popIn { from { opacity: 0; transform: scale(0.7); } to { opacity: 1; transform: scale(1); } }
    @keyframes spin { to { transform: rotate(360deg); } }
    @keyframes progress { from { width: 0%; } to { width: 100%; } }
    .animate-in { animation: slideUp 0.4s ease both; }
    .stagger-1 { animation-delay: 0.05s; }
    .stagger-2 { animation-delay: 0.1s; }
    .stagger-3 { animation-delay: 0.15s; }
    .stagger-4 { animation-delay: 0.2s; }
    @media (max-width: 400px) { .grid-2 { grid-template-columns: 1fr 1fr; } .sem-grid { grid-template-columns: repeat(4, 1fr); } }
  `;

  // ─── SCREENS ───────────────────────────────────────────────────────────────



  const SplashScreen = () => (
    <div className="splash">
      <div style={{ animation: "popIn 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.3s both", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 8 }}>
          <div style={{ width: 72, height: 72, background: "rgba(255,255,255,0.15)", borderRadius: 22, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid rgba(255,255,255,0.3)", backdropFilter: "blur(10px)" }}>
            <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
              <path d="M8 38L18 14L28 38" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 30h14" stroke="white" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="38" cy="16" r="7" stroke="#67e8f9" strokeWidth="2.5"/>
              <path d="M38 9v14M31 16h14" stroke="#67e8f9" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="38" cy="16" r="2.5" fill="#67e8f9"/>
            </svg>
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ color: "white", fontSize: 34, fontWeight: 800, letterSpacing: -1, lineHeight: 1 }}>GKV</div>
            <div style={{ color: "rgba(255,255,255,0.9)", fontSize: 18, fontWeight: 700, letterSpacing: 2, lineHeight: 1.2 }}>TECH LABS</div>
          </div>
        </div>
      </div>

      <div className="splash-bar"><div className="splash-progress"/></div>
    </div>
  );

  const BranchScreen = () => {
    const branches = [
      { code: "CSE", full: "Computer Science & Engg." },
      { code: "ECE", full: "Electronics & Communication" },
      { code: "ME", full: "Mechanical Engineering" },
      { code: "EE", full: "Electrical Engineering" }
    ];
    return (
      <div className="screen">
        <div className="header">
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 30, height: 30, background: t.primaryLight, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 48 48" fill="none">
                <path d="M8 38L18 14L28 38" stroke={t.primary} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 30h14" stroke={t.primary} strokeWidth="3.5" strokeLinecap="round"/>
                <circle cx="38" cy="16" r="7" stroke={t.accent} strokeWidth="2.5"/>
                <path d="M38 9v14M31 16h14" stroke={t.accent} strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span style={{ fontWeight: 800, fontSize: 16, color: t.text, letterSpacing: -0.3 }}>GKV <span style={{ color: t.primary }}>Tech Labs</span></span>
          </div>
          <div style={{ flex: 1 }}></div>
          <button className="icon-btn" onClick={() => setDark(d => !d)} style={{ background: "none" }}>
            <Icon name={dark ? "sun" : "moon"} size={20} color={t.textSub} />
          </button>
          <button className="icon-btn" onClick={() => setScreen("admin-login")}>
            <Icon name="shield" size={18} color={t.primary} />
          </button>
        </div>
        <div className="section-header">
          <div className="section-title">Select Branch</div>
          <div className="section-sub">Choose your engineering department</div>
        </div>
        <div className="grid-2">
          {branches.map((b, i) => (
            <div key={b.code} className={`branch-card animate-in stagger-${i + 1}`}
              onClick={() => fakeLoad(() => { setBranch(b.code); setScreen("semester"); })}>
              <div className="branch-icon">{b.code[0]}</div>
              <div className="branch-name">{b.code}</div>
              <div className="branch-full">{b.full}</div>
            </div>
          ))}
        </div>
        {loading && <div className="loading"><div className="spinner"/></div>}
        {recentlyViewed.length > 0 && (
          <>
            <div className="section-header" style={{ marginTop: 16 }}>
              <div className="section-title" style={{ fontSize: 16 }}>Recently Viewed</div>
            </div>
            <div className="grid-1">
              {recentlyViewed.slice(0, 3).map(item => (
                <div key={item.id} className="subject-card" onClick={() => {}}>
                  <div className="subject-icon" style={{ background: t.accentLight }}>
                    <Icon name="clock" size={20} color={t.accent} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="subject-name">{item.title || item.name}</div>
                    <div className="subject-code">{item.branch} • Sem {item.sem}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  const SemesterScreen = () => (
    <div className="screen">
      <div className="header">
        <button className="back-btn" onClick={() => setScreen("branch")}>
          <Icon name="chevronLeft" size={18} color={t.primary} />
        </button>
        <div style={{ flex: 1 }}>
          <div className="header-title">{branch}</div>
          <div className="header-sub">Select semester</div>
        </div>
        <button className="icon-btn" onClick={() => setDark(d => !d)} style={{ background: "none" }}>
          <Icon name={dark ? "sun" : "moon"} size={20} color={t.textSub} />
        </button>
      </div>
      <div className="section-header">
        <div className="section-title">Select Semester</div>
        <div className="section-sub">Academic year resources organized by semester</div>
      </div>
      <div className="sem-grid">
        {[1,2,3,4,5,6,7,8].map((s, i) => (
          <div key={s} className={`sem-card animate-in stagger-${Math.min(i+1,4)}`}
            onClick={() => fakeLoad(() => { setSemester(s); setScreen("home"); })}>
            <div className="sem-num">{s}</div>
            <div className="sem-label">SEM</div>
          </div>
        ))}
      </div>
      {loading && <div className="loading"><div className="spinner"/></div>}
    </div>
  );

  const HomeScreen = ({ navScreen, setNavScreen }) => {
    const filtered = activeTab === "lab"
      ? labSubjects.filter(s => !searchQuery || s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.code.toLowerCase().includes(searchQuery.toLowerCase()))
      : theorySubjects.filter(s => !searchQuery || s.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
      <div className="screen">
        <div className="header">
          <button className="back-btn" onClick={() => setScreen("semester")}>
            <Icon name="chevronLeft" size={18} color={t.primary} />
          </button>
          <div style={{ flex: 1 }}>
            <div className="header-title">{branch} • Semester {semester}</div>
            <div className="header-sub">GKV Tech Labs</div>
          </div>
          <button className="icon-btn" onClick={() => setDark(d => !d)} style={{ background: "none" }}>
            <Icon name={dark ? "sun" : "moon"} size={20} color={t.textSub} />
          </button>
        </div>
        <div className="tab-bar">
          <button className={`tab ${activeTab === "lab" ? "active" : ""}`} onClick={() => setActiveTab("lab")}>
            <Icon name="flask" size={16} color={activeTab === "lab" ? t.primary : t.textSub} />
            Lab Subjects
          </button>
          <button className={`tab ${activeTab === "theory" ? "active" : ""}`} onClick={() => setActiveTab("theory")}>
            <Icon name="book" size={16} color={activeTab === "theory" ? t.primary : t.textSub} />
            Theory Subjects
          </button>
        </div>
        <div className="search-bar">
          <Icon name="search" size={18} color={t.textMuted} />
          <input placeholder="Search subjects..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          {searchQuery && <button style={{ background: "none", border: "none", cursor: "pointer" }} onClick={() => setSearchQuery("")}>
            <Icon name="x" size={16} color={t.textMuted} />
          </button>}
        </div>
        {loading ? (
          <div className="loading"><div className="spinner"/></div>
        ) : filtered.length === 0 ? (
          <div className="empty-state">
            <Icon name={activeTab === "lab" ? "flask" : "book"} size={48} color={t.textMuted} />
            <p>{searchQuery ? "No results found" : `No ${activeTab === "lab" ? "lab" : "theory"} subjects for ${branch} Sem ${semester} yet`}</p>
            {!searchQuery && adminLoggedIn && <p style={{ fontSize: 12, marginTop: 8 }}>Add subjects from Admin Panel</p>}
          </div>
        ) : (
          <div className="grid-1" style={{ marginTop: 4 }}>
            {filtered.map((subj, i) => (
              <div key={subj.id} className={`subject-card animate-in stagger-${Math.min(i+1,4)}`}
                onClick={() => {
                  if (activeTab === "lab") { setSelectedLabSubject(subj); setNavScreen("labDetail"); }
                  else { setSelectedTheorySubject(subj); setNavScreen("theoryDetail"); }
                }}>
                <div className="subject-icon" style={{ background: activeTab === "lab" ? t.accentLight : t.primaryLight }}>
                  <Icon name={activeTab === "lab" ? "flask" : "book"} size={22} color={activeTab === "lab" ? t.accent : t.primary} />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="subject-code">{subj.code}</div>
                  <div className="subject-name">{subj.name}</div>
                  {activeTab === "lab" && <div style={{ marginTop: 4 }}><span className="pill">{subj.experiments.length} Experiments</span></div>}
                </div>
                <Icon name="chevronRight" size={18} color={t.textMuted} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const LabDetailScreen = ({ subj, setNavScreen }) => (
    <div className="screen">
      <div className="header">
        <button className="back-btn" onClick={() => setNavScreen("home")}>
          <Icon name="chevronLeft" size={18} color={t.primary} />
        </button>
        <div style={{ flex: 1 }}>
          <div className="header-title">{subj.name}</div>
          <div className="header-sub">{subj.code}</div>
        </div>
      </div>
      <div style={{ padding: "16px 20px 12px" }}>
        <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
          <a className="action-card" href={subj.syllabusPdf} target="_blank" rel="noreferrer" style={{ flex: 1, textDecoration: "none" }}>
            <div className="action-icon" style={{ background: "#fef3c7" }}>
              <Icon name="file" size={20} color="#d97706" />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: t.text }}>Syllabus</div>
              <div style={{ fontSize: 11, color: t.textSub }}>View / Download</div>
            </div>
          </a>
          <a className="action-card" href={subj.refFilePdf} target="_blank" rel="noreferrer" style={{ flex: 1, textDecoration: "none" }}>
            <div className="action-icon" style={{ background: t.accentLight }}>
              <Icon name="download" size={20} color={t.accent} />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: t.text }}>Lab File</div>
              <div style={{ fontSize: 11, color: t.textSub }}>Reference PDF</div>
            </div>
          </a>
        </div>
        <div style={{ fontSize: 13, fontWeight: 700, color: t.textSub, letterSpacing: 1, textTransform: "uppercase", marginBottom: 10 }}>
          EXPERIMENTS LIST
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {subj.experiments.map((exp, i) => (
            <div key={exp.id} className="exp-card animate-in"
              onClick={() => { setSelectedExperiment(exp); addRecent({ ...exp, branch, sem: semester }); setNavScreen("expDetail"); }}>
              <div className="exp-num">{i + 1}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: t.text }}>{exp.title}</div>
                <div style={{ fontSize: 12, color: t.textSub, marginTop: 2 }}>{exp.aim.slice(0, 50)}…</div>
              </div>
              <Icon name="chevronRight" size={18} color={t.textMuted} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ExperimentDetailScreen = ({ exp, setNavScreen }) => (
    <div className="screen">
      <div className="header">
        <button className="back-btn" onClick={() => setNavScreen("labDetail")}>
          <Icon name="chevronLeft" size={18} color={t.primary} />
        </button>
        <div style={{ flex: 1 }}>
          <div className="header-title">{exp.title}</div>
        </div>
        <button className="icon-btn" onClick={() => toggleBookmark(exp)}>
          <Icon name={isBookmarked(exp.id) ? "bookmarkFilled" : "bookmark"} size={18} color={t.primary} />
        </button>
      </div>
      <div style={{ padding: "16px 0" }}>
        {[
          { label: "AIM", text: exp.aim },
          { label: "THEORY", text: exp.theory },
          { label: "PRINCIPLE", text: exp.principle },
          { label: "PROCEDURE", text: exp.procedure },
          exp.result && { label: "RESULT / OUTPUT", text: exp.result }
        ].filter(Boolean).map((s, i) => (
          <div key={i} className="detail-section">
            <div className="detail-label">{s.label}</div>
            <div className="detail-text">{s.text}</div>
          </div>
        ))}
        {exp.youtubeLink && (
          <div className="detail-section">
            <div className="detail-label">VIDEO EXPLANATION</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <Icon name="play" size={16} color={t.danger} />
              <span style={{ fontSize: 13, fontWeight: 600, color: t.text }}>YouTube Tutorial</span>
            </div>
            <iframe className="video-frame" src={exp.youtubeLink} allowFullScreen title={exp.title} />
          </div>
        )}
        {exp.faculty && (
          <div className="detail-section">
            <div className="detail-label">FACULTY DETAILS</div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: t.primaryLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name="user" size={22} color={t.primary} />
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: t.text }}>{exp.faculty.name}</div>
                <div style={{ fontSize: 12, color: t.textSub }}>{exp.faculty.department} Department</div>
              </div>
            </div>
            <div className="faculty-row"><Icon name="mail" size={15} color={t.textSub}/><span style={{ fontSize: 13, color: t.text }}>{exp.faculty.email}</span></div>
            <div className="faculty-row"><Icon name="phone" size={15} color={t.textSub}/><span style={{ fontSize: 13, color: t.text }}>{exp.faculty.phone}</span></div>
          </div>
        )}
      </div>
    </div>
  );

  const TheoryDetailScreen = ({ subj, setNavScreen }) => (
    <div className="screen">
      <div className="header">
        <button className="back-btn" onClick={() => setNavScreen("home")}>
          <Icon name="chevronLeft" size={18} color={t.primary} />
        </button>
        <div style={{ flex: 1 }}>
          <div className="header-title">{subj.name}</div>
          <div className="header-sub">{subj.code}</div>
        </div>
      </div>
      <div style={{ padding: "16px 0" }}>
        {subj.notes && (
          <div className="info-banner">
            <div style={{ fontSize: 11, fontWeight: 700, color: t.primary, marginBottom: 4, letterSpacing: 0.5 }}>FACULTY NOTE</div>
            <div style={{ fontSize: 13, color: t.text }}>{subj.notes}</div>
          </div>
        )}
        <div className="detail-section">
          <div className="detail-label">REFERENCE BOOKS</div>
          {subj.books.map((b, i) => (
            <div key={i} style={{ display: "flex", gap: 10, padding: "8px 0", borderBottom: i < subj.books.length - 1 ? `1px solid ${t.cardBorder}` : "none" }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: t.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name="book" size={14} color={t.primary} />
              </div>
              <div style={{ fontSize: 14, color: t.text, lineHeight: 1.4, paddingTop: 4 }}>{b}</div>
            </div>
          ))}
        </div>
        <div className="detail-section">
          <div className="detail-label">UPLOADED DOCUMENTS</div>
          {subj.documents.length === 0
            ? <div style={{ fontSize: 13, color: t.textMuted }}>No documents uploaded yet.</div>
            : subj.documents.map((doc, i) => (
              <a key={i} href={doc.url} target="_blank" rel="noreferrer" className="action-card" style={{ marginBottom: 8, textDecoration: "none" }}>
                <div className="action-icon" style={{ background: "#fef3c7" }}>
                  <Icon name="file" size={18} color="#d97706" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: t.text }}>{doc.name}</div>
                  <div style={{ fontSize: 11, color: t.textSub }}>PDF Document</div>
                </div>
                <Icon name="download" size={16} color={t.textMuted} />
              </a>
            ))
          }
        </div>
      </div>
    </div>
  );

  const BookmarksScreen = () => (
    <div className="screen">
      <div className="header">
        <div style={{ flex: 1 }}>
          <div className="header-title">Bookmarks</div>
          <div className="header-sub">Saved experiments</div>
        </div>
      </div>
      {bookmarks.length === 0
        ? <div className="empty-state"><Icon name="bookmark" size={48} color={t.textMuted}/><p>No bookmarks yet. Tap the bookmark icon on any experiment.</p></div>
        : <div className="grid-1" style={{ marginTop: 16 }}>
          {bookmarks.map(exp => (
            <div key={exp.id} className="subject-card" onClick={() => { setSelectedExperiment(exp); setNavScreen("expDetail"); }}>
              <div className="subject-icon" style={{ background: t.accentLight }}>
                <Icon name="bookmarkFilled" size={20} color={t.accent} />
              </div>
              <div style={{ flex: 1 }}>
                <div className="subject-name">{exp.title}</div>
                <div className="subject-code">{exp.aim?.slice(0, 40)}…</div>
              </div>
              <button style={{ background: "none", border: "none", cursor: "pointer" }} onClick={e => { e.stopPropagation(); toggleBookmark(exp); }}>
                <Icon name="x" size={16} color={t.textMuted} />
              </button>
            </div>
          ))}
        </div>
      }
    </div>
  );

  // ─── ADMIN ─────────────────────────────────────────────────────────────────
  const AdminLoginScreen = () => {
    const [uid, setUid] = useState("");
    const [pwd, setPwd] = useState("");
    const [err, setErr] = useState("");
    const submit = () => {
      if (uid === "GKV" && pwd === "FET") { setAdminLoggedIn(true); setScreen("admin"); }
      else setErr("Invalid credentials. Please contact your administrator.");
    };
    return (
      <div className="screen" style={{ display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "100vh", padding: "0 20px" }}>
        <button className="back-btn" style={{ marginBottom: 24, alignSelf: "flex-start" }} onClick={() => setScreen("branch")}>
          <Icon name="chevronLeft" size={18} color={t.primary} />
        </button>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ width: 72, height: 72, background: t.primaryLight, borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
            <Icon name="shield" size={32} color={t.primary} />
          </div>
          <div style={{ fontSize: 24, fontWeight: 800, color: t.text }}>Admin Login</div>
          <div style={{ fontSize: 13, color: t.textSub, marginTop: 4 }}>Faculty Access — GKV Tech Labs</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <input className="input-field" placeholder="User ID" value={uid} onChange={e => setUid(e.target.value)} />
          <input className="input-field" type="password" placeholder="Password" value={pwd} onChange={e => setPwd(e.target.value)} onKeyDown={e => e.key === "Enter" && submit()} />
          {err && <div style={{ color: t.danger, fontSize: 13, textAlign: "center" }}>{err}</div>}
          <button className="btn-primary" onClick={submit} style={{ marginTop: 8 }}>
            <Icon name="shield" size={16} color="white" /> Login to Admin Panel
          </button>
        </div>
      </div>
    );
  };

  const AdminPanel = () => {
    const [addingLab, setAddingLab] = useState(false);
    const [addingExp, setAddingExp] = useState(false);
    const [addingTheory, setAddingTheory] = useState(false);
    const [selBranch, setSelBranch] = useState("CSE");
    const [selSem, setSelSem] = useState("3");
    const [selSubjId, setSelSubjId] = useState("");
    const [form, setForm] = useState({});

    const key = `${selBranch}-${selSem}`;
    const labs = data.labSubjects[key] || [];
    const theories = data.theorySubjects[key] || [];

    const setF = (k, v) => setForm(f => ({ ...f, [k]: v }));

    const addLabSubject = () => {
      if (!form.name || !form.code) { showToast("Fill all fields", "error"); return; }
      const ns = { id: Date.now().toString(), code: form.code, name: form.name, syllabusPdf: form.syllabus || "", refFilePdf: form.refFile || "", experiments: [] };
      setData(d => ({ ...d, labSubjects: { ...d.labSubjects, [key]: [...(d.labSubjects[key] || []), ns] } }));
      showToast("Lab subject added!"); setAddingLab(false); setForm({});
    };

    const addExperiment = () => {
      if (!form.title || !selSubjId) { showToast("Select subject & fill title", "error"); return; }
      const exp = { id: Date.now().toString(), title: form.title, aim: form.aim || "", theory: form.theory || "", principle: form.principle || "", procedure: form.procedure || "", result: form.result || "", youtubeLink: form.youtube || "", faculty: { name: form.facName || "", email: form.facEmail || "", phone: form.facPhone || "", department: selBranch } };
      setData(d => ({ ...d, labSubjects: { ...d.labSubjects, [key]: (d.labSubjects[key] || []).map(s => s.id === selSubjId ? { ...s, experiments: [...s.experiments, exp] } : s) } }));
      showToast("Experiment added!"); setAddingExp(false); setForm({});
    };

    const addTheorySubject = () => {
      if (!form.name || !form.code) { showToast("Fill all fields", "error"); return; }
      const ns = { id: Date.now().toString(), code: form.code, name: form.name, books: (form.books || "").split("\n").filter(Boolean), documents: [], notes: form.notes || "" };
      setData(d => ({ ...d, theorySubjects: { ...d.theorySubjects, [key]: [...(d.theorySubjects[key] || []), ns] } }));
      showToast("Theory subject added!"); setAddingTheory(false); setForm({});
    };

    const deleteLabSubject = (id) => {
      if (!confirm("Delete this subject and all its experiments?")) return;
      setData(d => ({ ...d, labSubjects: { ...d.labSubjects, [key]: (d.labSubjects[key] || []).filter(s => s.id !== id) } }));
      showToast("Deleted");
    };

    const deleteExperiment = (subjId, expId) => {
      setData(d => ({ ...d, labSubjects: { ...d.labSubjects, [key]: (d.labSubjects[key] || []).map(s => s.id === subjId ? { ...s, experiments: s.experiments.filter(e => e.id !== expId) } : s) } }));
      showToast("Experiment deleted");
    };

    const deleteTheory = (id) => {
      setData(d => ({ ...d, theorySubjects: { ...d.theorySubjects, [key]: (d.theorySubjects[key] || []).filter(s => s.id !== id) } }));
      showToast("Deleted");
    };

    const resetToDefault = () => {
      if (!confirm("Reset all data to defaults?")) return;
      setData(INITIAL_DATA); showToast("Reset to defaults");
    };

    return (
      <div className="screen">
        <div className="header">
          <div style={{ flex: 1 }}>
            <div className="header-title">Admin Panel</div>
            <div className="header-sub">Faculty Dashboard</div>
          </div>
          <button className="icon-btn" onClick={() => { setAdminLoggedIn(false); setScreen("branch"); }}>
            <Icon name="logout" size={18} color={t.danger} />
          </button>
        </div>
        <div style={{ padding: "12px 20px" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
            {["CSE","ECE","ME","EE"].map(b => (
              <button key={b} onClick={() => setSelBranch(b)} style={{ padding: "6px 14px", borderRadius: 20, border: `2px solid ${selBranch === b ? t.primary : t.inputBorder}`, background: selBranch === b ? t.primary : t.inputBg, color: selBranch === b ? "white" : t.text, fontWeight: 700, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>{b}</button>
            ))}
          </div>
          <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
            {[1,2,3,4,5,6,7,8].map(s => (
              <button key={s} onClick={() => setSelSem(String(s))} style={{ padding: "5px 12px", borderRadius: 16, border: `2px solid ${selSem === String(s) ? t.accent : t.inputBorder}`, background: selSem === String(s) ? t.accent : t.inputBg, color: selSem === String(s) ? "white" : t.text, fontWeight: 700, fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}>S{s}</button>
            ))}
          </div>
        </div>
        <div className="tab-bar" style={{ top: 60 }}>
          {["labs","experiments","theory"].map(tab => (
            <button key={tab} className={`tab ${adminTab === tab ? "active" : ""}`} onClick={() => setAdminTab(tab)}>
              <Icon name={tab === "labs" ? "flask" : tab === "experiments" ? "beaker" : "book"} size={14} color={adminTab === tab ? t.primary : t.textSub} />
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {adminTab === "labs" && (
          <div style={{ padding: "16px 0" }}>
            <div style={{ padding: "0 20px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: 700, color: t.text }}>Lab Subjects ({labs.length})</span>
              <button className="btn-primary" style={{ padding: "8px 14px", fontSize: 13 }} onClick={() => { setAddingLab(true); setForm({}); }}>
                <Icon name="plus" size={14} color="white" /> Add
              </button>
            </div>
            {labs.length === 0 && <div className="empty-state"><Icon name="flask" size={40} color={t.textMuted}/><p>No lab subjects for {selBranch} Sem {selSem}</p></div>}
            {labs.map(s => (
              <div key={s.id} className="admin-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: t.textSub, fontFamily: "JetBrains Mono, monospace" }}>{s.code}</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: t.text }}>{s.name}</div>
                    <div style={{ fontSize: 12, color: t.textSub, marginTop: 3 }}>{s.experiments.length} experiments</div>
                  </div>
                  <button className="btn-danger" onClick={() => deleteLabSubject(s.id)}>
                    <Icon name="trash" size={13} color="white" />
                  </button>
                </div>
              </div>
            ))}
            {addingLab && (
              <div className="modal-overlay" onClick={() => setAddingLab(false)}>
                <div className="modal" onClick={e => e.stopPropagation()}>
                  <div className="modal-handle"/>
                  <div style={{ fontWeight: 800, fontSize: 18, color: t.text, marginBottom: 16 }}>Add Lab Subject</div>
                  {[["Subject Code", "code"], ["Subject Name", "name"], ["Syllabus PDF URL", "syllabus"], ["Reference File URL", "refFile"]].map(([p, k]) => (
                    <input key={k} className="input-field" placeholder={p} value={form[k] || ""} onChange={e => setF(k, e.target.value)} style={{ marginBottom: 10 }} />
                  ))}
                  <button className="btn-primary" style={{ width: "100%", marginTop: 8 }} onClick={addLabSubject}>
                    <Icon name="save" size={16} color="white" /> Save Subject
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {adminTab === "experiments" && (
          <div style={{ padding: "16px 0" }}>
            <div style={{ padding: "0 20px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: 700, color: t.text }}>Experiments</span>
              <button className="btn-primary" style={{ padding: "8px 14px", fontSize: 13 }} onClick={() => { setAddingExp(true); setForm({}); }}>
                <Icon name="plus" size={14} color="white" /> Add
              </button>
            </div>
            {labs.length === 0 && <div className="empty-state"><p>Add lab subjects first</p></div>}
            {labs.map(s => (
              <div key={s.id}>
                <div style={{ padding: "8px 20px", fontSize: 12, fontWeight: 700, color: t.textSub, letterSpacing: 0.5, textTransform: "uppercase" }}>{s.name}</div>
                {s.experiments.length === 0 && <div style={{ padding: "0 20px 8px", fontSize: 13, color: t.textMuted }}>No experiments yet</div>}
                {s.experiments.map((e, i) => (
                  <div key={e.id} className="admin-card" style={{ marginBottom: 8 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, color: t.text }}>{i+1}. {e.title}</div>
                        <div style={{ fontSize: 12, color: t.textSub, marginTop: 2 }}>{e.aim?.slice(0, 50)}…</div>
                      </div>
                      <button className="btn-danger" onClick={() => deleteExperiment(s.id, e.id)}>
                        <Icon name="trash" size={13} color="white" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
            {addingExp && (
              <div className="modal-overlay" onClick={() => setAddingExp(false)}>
                <div className="modal" onClick={e => e.stopPropagation()}>
                  <div className="modal-handle"/>
                  <div style={{ fontWeight: 800, fontSize: 18, color: t.text, marginBottom: 16 }}>Add Experiment</div>
                  <div style={{ marginBottom: 10 }}>
                    <div style={{ fontSize: 12, color: t.textSub, marginBottom: 6, fontWeight: 600 }}>Select Subject</div>
                    <select className="input-field" value={selSubjId} onChange={e => setSelSubjId(e.target.value)}>
                      <option value="">— choose subject —</option>
                      {labs.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                    </select>
                  </div>
                  {[["Experiment Title", "title", false], ["Aim", "aim", true], ["Theory", "theory", true], ["Principle", "principle", true], ["Procedure", "procedure", true], ["Result / Output", "result", true], ["YouTube Embed URL", "youtube", false], ["Faculty Name", "facName", false], ["Faculty Email", "facEmail", false], ["Faculty Phone", "facPhone", false]].map(([p, k, multi]) => (
                    multi
                      ? <textarea key={k} className="input-field" placeholder={p} value={form[k] || ""} onChange={e => setF(k, e.target.value)} style={{ marginBottom: 10 }} />
                      : <input key={k} className="input-field" placeholder={p} value={form[k] || ""} onChange={e => setF(k, e.target.value)} style={{ marginBottom: 10 }} />
                  ))}
                  <button className="btn-primary" style={{ width: "100%", marginTop: 8 }} onClick={addExperiment}>
                    <Icon name="save" size={16} color="white" /> Save Experiment
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {adminTab === "theory" && (
          <div style={{ padding: "16px 0" }}>
            <div style={{ padding: "0 20px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: 700, color: t.text }}>Theory Subjects ({theories.length})</span>
              <button className="btn-primary" style={{ padding: "8px 14px", fontSize: 13 }} onClick={() => { setAddingTheory(true); setForm({}); }}>
                <Icon name="plus" size={14} color="white" /> Add
              </button>
            </div>
            {theories.length === 0 && <div className="empty-state"><Icon name="book" size={40} color={t.textMuted}/><p>No theory subjects yet</p></div>}
            {theories.map(s => (
              <div key={s.id} className="admin-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: t.textSub, fontFamily: "JetBrains Mono, monospace" }}>{s.code}</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: t.text }}>{s.name}</div>
                    <div style={{ fontSize: 12, color: t.textSub, marginTop: 3 }}>{s.books?.length} books • {s.documents?.length} docs</div>
                  </div>
                  <button className="btn-danger" onClick={() => deleteTheory(s.id)}>
                    <Icon name="trash" size={13} color="white" />
                  </button>
                </div>
              </div>
            ))}
            {addingTheory && (
              <div className="modal-overlay" onClick={() => setAddingTheory(false)}>
                <div className="modal" onClick={e => e.stopPropagation()}>
                  <div className="modal-handle"/>
                  <div style={{ fontWeight: 800, fontSize: 18, color: t.text, marginBottom: 16 }}>Add Theory Subject</div>
                  {[["Subject Code", "code"], ["Subject Name", "name"]].map(([p, k]) => (
                    <input key={k} className="input-field" placeholder={p} value={form[k] || ""} onChange={e => setF(k, e.target.value)} style={{ marginBottom: 10 }} />
                  ))}
                  <textarea className="input-field" placeholder="Reference Books (one per line)" value={form.books || ""} onChange={e => setF("books", e.target.value)} style={{ marginBottom: 10 }} />
                  <textarea className="input-field" placeholder="Faculty Notes / Tips" value={form.notes || ""} onChange={e => setF("notes", e.target.value)} style={{ marginBottom: 10 }} />
                  <button className="btn-primary" style={{ width: "100%", marginTop: 8 }} onClick={addTheorySubject}>
                    <Icon name="save" size={16} color="white" /> Save Subject
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        <div style={{ padding: "16px 20px" }}>
          <button className="btn-secondary" style={{ width: "100%" }} onClick={resetToDefault}>
            Reset All Data to Defaults
          </button>
        </div>
      </div>
    );
  };

  // ─── MAIN NAV SCREEN ───────────────────────────────────────────────────────
  const [navScreen, setNavScreen] = useState("home");

  const MainApp = () => {
    const tabs = [
      { id: "home", label: "Home", icon: "home" },
      { id: "bookmarks", label: "Bookmarks", icon: "bookmark" },
      { id: "search-nav", label: "Search", icon: "search" },
    ];

    return (
      <div style={{ position: "relative", maxWidth: 600, margin: "0 auto" }}>
        {navScreen === "home" && <HomeScreen navScreen={navScreen} setNavScreen={setNavScreen} />}
        {navScreen === "labDetail" && selectedLabSubject && <LabDetailScreen subj={selectedLabSubject} setNavScreen={setNavScreen} />}
        {navScreen === "expDetail" && selectedExperiment && <ExperimentDetailScreen exp={selectedExperiment} setNavScreen={setNavScreen} />}
        {navScreen === "theoryDetail" && selectedTheorySubject && <TheoryDetailScreen subj={selectedTheorySubject} setNavScreen={setNavScreen} />}
        {navScreen === "bookmarks" && <BookmarksScreen />}
        {navScreen === "search-nav" && (
          <div className="screen">
            <div className="header"><div className="header-title">Search</div></div>
            <div className="search-bar" style={{ marginTop: 16 }}>
              <Icon name="search" size={18} color={t.textMuted} />
              <input autoFocus placeholder="Search subjects, experiments..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
              {searchQuery && <button style={{ background: "none", border: "none", cursor: "pointer" }} onClick={() => setSearchQuery("")}><Icon name="x" size={16} color={t.textMuted} /></button>}
            </div>
            {searchQuery.length > 1 && (
              searchResults.length === 0
                ? <div className="empty-state"><p>No results for "{searchQuery}"</p></div>
                : <div style={{ paddingTop: 4 }}>
                  {searchResults.map((r, i) => (
                    <div key={i} className="search-result" onClick={() => {
                      if (r.type === "exp") { setSelectedExperiment(r.exp); setSelectedLabSubject(r.subject); setNavScreen("expDetail"); }
                      else if (r.type === "lab") { setSelectedLabSubject(r.subject); setNavScreen("labDetail"); }
                      else if (r.type === "theory") { setSelectedTheorySubject(r.subject); setNavScreen("theoryDetail"); }
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span className={`badge badge-${r.type}`}>{r.type.toUpperCase()}</span>
                        <span style={{ fontSize: 14, fontWeight: 700, color: t.text }}>{r.exp?.title || r.subject?.name}</span>
                      </div>
                      <div style={{ fontSize: 12, color: t.textSub, marginTop: 3 }}>{r.key.replace("-", " • Semester ")}</div>
                    </div>
                  ))}
                </div>
            )}
          </div>
        )}
        <div className="bottom-nav">
          {tabs.map(tab => (
            <button key={tab.id} className={`nav-item ${navScreen === tab.id ? "active" : ""}`}
              onClick={() => setNavScreen(tab.id)}>
              <Icon name={navScreen === tab.id && tab.id === "bookmarks" ? "bookmarkFilled" : tab.icon} size={22} color={navScreen === tab.id ? t.primary : t.textSub} />
              {tab.label}
            </button>
          ))}
          {adminLoggedIn && (
            <button className="nav-item" onClick={() => setScreen("admin")}>
              <Icon name="shield" size={22} color={t.textSub} />
              Admin
            </button>
          )}
        </div>
      </div>
    );
  };

  // ─── RENDER ────────────────────────────────────────────────────────────────
  return (
    <>
      <style>{css}</style>
      <div className="app">
        <div style={{ maxWidth: 600, margin: "0 auto", minHeight: "100vh" }}>
          {screen === "splash" && <SplashScreen />}
          {screen === "branch" && <BranchScreen />}
          {screen === "semester" && <SemesterScreen />}
          {screen === "home" && <MainApp />}
          {screen === "admin-login" && <AdminLoginScreen />}
          {screen === "admin" && adminLoggedIn && <AdminPanel />}
          {screen === "admin" && !adminLoggedIn && <AdminLoginScreen />}
        </div>
        {toast && <div className={`toast ${toast.type}`}>{toast.msg}</div>}
      </div>
    </>
  );
}
