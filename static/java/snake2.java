import java.applet.*;

public class snake2 extends Applet {
	public static void main (String[] args)
	{
		JFrame obj = new JFrame();
		obj.setBounds(10, 10, 600, 600);
		obj.setTitle("Hungry Snake");
		obj.setResizable(false);
		obj.setVisible(true);
		obj.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		snake game = new snake();
		obj.add(game);
	}
}