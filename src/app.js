import express from 'express';
import './config.js'
import { PORT} from './config.js'
import roomsRoutes from './routes/rooms.routes.js'
import bookingsRoutes from './routes/bookings.routes.js'
const app = express();

app.use(express.json())
app.use(roomsRoutes)
app.use(bookingsRoutes)
app.use((req, res, next) => {
    res.status(404).json({ message: 'Endpoint no encontrado' });
})
export default app