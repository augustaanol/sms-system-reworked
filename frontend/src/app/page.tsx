import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="w-full flex flex-row standard-gap flex-wrap">
      <Card className="small-card"></Card>
      <Card className="large-card"></Card>
      <Card className="small-card"></Card>
    </div>
  )
}