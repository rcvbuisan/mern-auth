import { Router } from 'express';
import * as EventController from '../controllers/event.controller';
const router = new Router();

// Get all Posts
router.route('/events').get(EventController.getEvents);

// Get one post by code
router.route('/events/:code').get(EventController.getEvent);

// Add a new Post
router.route('/events').post(EventController.addEvent);

// Delete a post by code
router.route('/events/:code').delete(EventController.deleteEvent);

export default router;
