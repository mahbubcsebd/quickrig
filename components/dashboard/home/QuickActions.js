// components/QuickActions.jsx
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ArrowUpDown, Plus } from 'lucide-react';

const equipmentData = [
  {
    id: 1,
    name: 'Flatbed Trailer',
    startDate: null,
    endDate: null,
    location: 'Phoenix, AZ',
    status: 'Available',
    statusColor: 'success',
  },
  {
    id: 2,
    name: 'Dump Truck',
    startDate: '20 Jan 2025',
    endDate: '20 Jan 2025',
    location: 'Houston, TX',
    status: 'In Rent',
    statusColor: 'warning',
  },
  {
    id: 3,
    name: 'Flatbed Trailer',
    startDate: '24 Jan 2025',
    endDate: '24 Jan 2025',
    location: 'Houston, TX',
    status: 'In Rent',
    statusColor: 'warning',
  },
  {
    id: 4,
    name: 'Dump Truck',
    startDate: null,
    endDate: null,
    location: 'Houston, TX',
    status: 'Under repair',
    statusColor: 'destructive',
  },
];

const statusVariants = {
  success: 'bg-green-100 text-green-800 hover:bg-green-100',
  warning: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100',
  destructive: 'bg-red-100 text-red-800 hover:bg-red-100',
};

export default function QuickActions() {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle className="text-xl font-semibold">
              Quick Actions
            </CardTitle>
            <CardDescription className="mt-1">
              View and manage your equipment.
            </CardDescription>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="default"
              className="bg-yellow-600 hover:bg-yellow-700"
            >
              Manage Booking
            </Button>
            <Button
              variant="outline"
              className="border-yellow-600 text-yellow-700 hover:bg-yellow-50"
            >
              <Plus className="w-4 h-4 mr-2" />
              List New Equipment
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <div className="flex items-center gap-2">
                    Equipment
                    <ArrowUpDown className="w-4 h-4 text-gray-400" />
                  </div>
                </TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status & Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {equipmentData.map((equipment) => (
                <TableRow key={equipment.id}>
                  <TableCell className="font-medium">
                    {equipment.name}
                  </TableCell>
                  <TableCell>{equipment.startDate || '__ __ ___'}</TableCell>
                  <TableCell>{equipment.endDate || '__ __ ___'}</TableCell>
                  <TableCell>{equipment.location}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={statusVariants[equipment.statusColor]}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current mr-2"></span>
                      {equipment.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {equipmentData.map((equipment) => (
            <div key={equipment.id} className="border rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-base">{equipment.name}</h3>
                <Badge
                  variant="secondary"
                  className={statusVariants[equipment.statusColor]}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current mr-2"></span>
                  {equipment.status}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-gray-500">Start Date</p>
                  <p className="font-medium">
                    {equipment.startDate || '__ __ ___'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">End Date</p>
                  <p className="font-medium">
                    {equipment.endDate || '__ __ ___'}
                  </p>
                </div>
              </div>

              <div className="text-sm">
                <p className="text-gray-500">Location</p>
                <p className="font-medium">{equipment.location}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
