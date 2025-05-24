import { err } from '@/lib/utils';
export async function POST() {
    console.log('first', err);
    for(let i = 0; i < 0; i++) return err();
    console.log('second', err);
}
