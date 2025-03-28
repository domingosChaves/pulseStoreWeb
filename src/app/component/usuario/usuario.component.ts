import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Usuario } from 'src/app/model/usuario.model';
import { Papel } from 'src/app/enum/papel.enum';
import { CarrinhoService } from 'src/app/services/carrinho/carrinho.service';
import { CarrinhoRequest } from 'src/app/model/carrinhoRequest.model';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  
  usuario: Usuario = new Usuario('', '', '', Papel.CLIENTE);
  papeis = Object.values(Papel); // Obtém os valores do enum Papel
  isUpdating: boolean = false;
  usuarioId: number | null = null; // Para armazenar o ID do usuário se estiver atualizando


  constructor(
    private usuarioService: UsuarioService,
    private carrinhoService: CarrinhoService,
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usuarioId = this.route.snapshot.params['id']; // Obtém o ID da URL se disponível
    if (this.usuarioId) {
      this.isUpdating = true;
      this.usuarioService.removerUsuarioSessao();
      // this.carregarUsuario(); // Chama o método para carregar os dados do usuário
    }
  }

  carregarUsuario(): void {
    // Método para buscar os dados do usuário pelo ID
    this.usuarioService.getUsuarioById(this.usuarioId).subscribe(
      (usuario) => {
        this.usuario = usuario; // Carrega os dados do usuário no formulário
      },
      (error) => {
        console.error('Erro ao carregar usuário', error);
      }
    );
  }

  registrar(): void {
    this.usuarioService.registrarUsuario(this.usuario).subscribe(
      (novoUsuario) => {
        const carrinhoRequest : CarrinhoRequest = new CarrinhoRequest(novoUsuario?.id);
      
        this.usuarioService.salvarUsuarioSessao(novoUsuario); // Salvar usuário na sessão

        // Cria um carrinho para o usuario
        // Salva o Carrinho na Sessão
        this.carrinhoService.criarCarrinho(carrinhoRequest).subscribe((novoCarrinho) =>{
          this.carrinhoService.salvarCarrinhoSessao(novoCarrinho);
        }); 

        this.router.navigate(['/clientes']); // Redirecionar após o registro
      },
      (error) => {
        console.error('Erro ao registrar o usuário', error);
      }
    );
  }
  
  atualizar(): void {
    if (this.usuarioId) {
      this.usuarioService.atualizarUsuario(this.usuarioId, this.usuario).subscribe(
        (usuarioAtualizado) => {
          console.log('Usuário atualizado com sucesso', usuarioAtualizado);
          this.usuarioService.salvarUsuarioSessao(usuarioAtualizado); // Salvar usuário na sessão
          this.router.navigate(['/clientes']); // Redirecionar após a atualização
        },
        (error) => {
          console.error('Erro ao atualizar o usuário', error);
        }
      );
    }
  }
}