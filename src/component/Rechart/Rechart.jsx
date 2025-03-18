import { Line, LineChart, XAxis, YAxis } from 'recharts';
const Rechart = () => {
    const data = [
        { name: 'John', math: 85, english: 78, science: 92, history: 88 },
        { name: 'Emma', math: 78, english: 82, science: 90, history: 76 },
        { name: 'Oliver', math: 92, english: 85, science: 84, history: 91 },
        { name: 'Sophia', math: 88, english: 90, science: 86, history: 87 },
        { name: 'Liam', math: 76, english: 84, science: 82, history: 78 },
        { name: 'Noah', math: 81, english: 79, science: 88, history: 83 },
        { name: 'Ava', math: 90, english: 91, science: 87, history: 85 },
        { name: 'Isabella', math: 84, english: 88, science: 80, history: 79 },
        { name: 'Mia', math: 95, english: 93, science: 89, history: 92 },
        { name: 'Charlotte', math: 72, english: 78, science: 76, history: 74 },
      ];
      
    return (
        <div className="max-w-7xl mx-auto flex justify-center mt-36 mb-20">
            <div>
            <LineChart width={800} height={300} data={data}>
            <Line type="monotone" dataKey="math" stroke="#8884d8" />
            <Line type="monotone" dataKey="english" stroke="red" />
            <Line type="monotone" dataKey="science" stroke="green" />
            <Line type="monotone" dataKey="history" stroke="blue" />
            
            <XAxis dataKey="name" />
            <YAxis />
            </LineChart>
            </div>
            
        </div>
    );
};

export default Rechart;