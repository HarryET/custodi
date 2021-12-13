import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '../../../../hooks/useAuth'
import NavBar from '../../../../components/NavBar'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from 'recharts'

const Project: NextPage = () => {

  const router = useRouter();
  const { session, user } = useAuth();

  useEffect(() => {
    console.log(user)
    if(session === null) {
      router.push("/login")
    }
  }, [session, router])

  const totalTransactionsData = [
    { name: '12/05', transactions: 400 },
    { name: '12/06', transactions: 320 },
    { name: '12/07', transactions: 212 },
    { name: '12/08', transactions: 107 },
    { name: '12/09', transactions: 316 },
    { name: '12/10', transactions: 457 },
    { name: '12/11', transactions: 261 },
    { name: '12/12', transactions: 373 },
  ]
  const totalTransactionsLineChart = (
    <ResponsiveContainer>
      <LineChart data={totalTransactionsData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="transactions" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis style={{ fontSize: '0.7em' }} dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  )

  const failuresByTypeData = [
    { name: 'Add User', value: 53 },
    { name: 'Login', value: 110 },
    { name: 'Signup', value: 94 },
    { name: 'Billing Form Submit', value: 32 },
  ]
  const COLORS = [
    '#1D0F55',
    '#2E1885',
    '#3E20B5',
    '#5432DB',
    '#7C62E3',
    '#9985E9',
    '#B6A7EF',
    '#D3CAF6',
    '#F0ECFC',
  ]
  const failuresByTypePieChart = (
    <ResponsiveContainer>
      <PieChart>
        <Legend />
        <Pie
          data={failuresByTypeData}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
          label
        >
          {failuresByTypeData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )

  const transactionsByTypeData = [
    { name: 'Add User', value: 115 },
    { name: 'Login', value: 410 },
    { name: 'Signup', value: 243 },
    { name: 'Billing Form Submit', value: 155 },
  ]
  const transactionsByTypePieChart = (
    <ResponsiveContainer>
      <PieChart>
        <Legend />
        <Pie
          data={transactionsByTypeData}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
          label
        >
          {transactionsByTypeData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )

  const totalBugsData = [
    { name: '12/05', transactions: 137 },
    { name: '12/06', transactions: 94 },
    { name: '12/07', transactions: 82 },
    { name: '12/08', transactions: 23 },
    { name: '12/09', transactions: 89 },
    { name: '12/10', transactions: 142 },
    { name: '12/11', transactions: 74 },
    { name: '12/12', transactions: 91 },
  ]
  const totalBugsLineChart = (
    <ResponsiveContainer>
      <LineChart data={totalBugsData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="transactions" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis style={{ fontSize: '0.7em' }} dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  )

  return (
    <>
<NavBar></NavBar>
      <div className="m-2 md:m-16">
        <div>
          <h1 className="text-2xl lg:text-5xl font-bold">Project Name</h1>
          <p className="text-gray-400 m-2">displaying results from the last 7 days</p>
        </div>
        <div className="flex m-3 justify-around md:w-1/3 text-2xl font-bold">
          <div className="flex-col">
            <h3>Total</h3>
            <p>120</p>
          </div>
          <div className="flex-col  text-red-600">
            <h3>Critical</h3>
            <p>36</p>
          </div>
          <div className="flex-col ">
            <h3>Users</h3>
            <p>36</p>
          </div>
        </div>
        <div className="flex text-xl text-center font-bold flex-wrap h-full mt-6">
          <div className="flex-col w-full md:w-1/2 pb-6 md:p-8">
            <h4>Total # of Transactions</h4>
            <div className="h-64 md:h-96">{totalTransactionsLineChart}</div>
          </div>
          <div className="flex-col w-full md:w-1/2 pb-6 md:p-8">
            <h4>Failures By Transaction Type</h4>
            <div className="h-64 md:h-96">{failuresByTypePieChart}</div>
          </div>
          <div className="flex-col w-full md:w-1/2 pb-6 md:p-8">
            <h4>Transactions by Type</h4>
            <div className="h-64 md:h-96">{transactionsByTypePieChart}</div>
          </div>
          <div className="flex-col w-full md:w-1/2 pb-6 md:p-8">
            <h4>Total # of Bugs</h4>
            <div className="h-64 md:h-96">{totalBugsLineChart}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project