import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://dqxxxzdxygysvonzortu.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxeHh4emR4eWd5c3ZvbnpvcnR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwMzIwNTgsImV4cCI6MjA2ODYwODA1OH0.DPy9lhAmyoxKC4M_HWauGZc3W5pWjyZlNvvV-Y6_ioc";

export const supabase = createClient(supabaseUrl, supabaseKey)


// Database types
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          name: string
          user_type: 'student' | 'teacher' | 'admin'
          phone?: string
          age?: string
          country?: string
          monthly_fees?: string
          assigned_teacher?: string
          subjects?: string[]
          status?: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          name: string
          user_type: 'student' | 'teacher' | 'admin'
          phone?: string
          age?: string
          country?: string
          monthly_fees?: string
          assigned_teacher?: string
          subjects?: string[]
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          user_type?: 'student' | 'teacher' | 'admin'
          phone?: string
          age?: string
          country?: string
          monthly_fees?: string
          assigned_teacher?: string
          subjects?: string[]
          status?: string
          created_at?: string
          updated_at?: string
        }
      }
      schedules: {
        Row: {
          id: string
          student_id: string
          teacher_id: string
          date: string
          day: string
          time_uk: string
          time_eg: string
          status: 'scheduled' | 'attended' | 'cancelled' | 'completed'
          subject: string
          zoom_link?: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          student_id: string
          teacher_id: string
          date: string
          day: string
          time_uk: string
          time_eg: string
          status?: 'scheduled' | 'attended' | 'cancelled' | 'completed'
          subject: string
          zoom_link?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          student_id?: string
          teacher_id?: string
          date?: string
          day?: string
          time_uk?: string
          time_eg?: string
          status?: 'scheduled' | 'attended' | 'cancelled' | 'completed'
          subject?: string
          zoom_link?: string
          created_at?: string
          updated_at?: string
        }
      }
      teachers: {
        Row: {
          id: string
          name: string
          email: string
          phone: string
          specialization: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone: string
          specialization: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string
          specialization?: string
          created_at?: string
          updated_at?: string
        }
      }
      attendance: {
        Row: {
          id: string
          schedule_id: string
          student_id: string
          status: 'attended' | 'cancelled'
          timestamp: string
          created_at: string
        }
        Insert: {
          id?: string
          schedule_id: string
          student_id: string
          status: 'attended' | 'cancelled'
          timestamp?: string
          created_at?: string
        }
        Update: {
          id?: string
          schedule_id?: string
          student_id?: string
          status?: 'attended' | 'cancelled'
          timestamp?: string
          created_at?: string
        }
      }
    }
  }
} 
