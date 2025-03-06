import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar 2 comentários no Post', () => {
        render(<PostComment />);
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Uaaal incrivél!!!'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))

        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Que Show, quero um desses!'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))


        expect(screen.getByText('Uaaal incrivél!!!')).toBeInTheDocument();
        expect(screen.getByText('Que Show, quero um desses!')).toBeInTheDocument();
    })
})