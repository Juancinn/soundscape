import SwiftUI
import commonModule

struct ContentView: View {
    @State private var responseText: String = "Testing..."

    var body: some View {
        VStack {
            Text(responseText)
                .padding()
                .onAppear {
                    Task {
                        do {
                            let result = try await HttpClientTest().testHttpClient()
                            DispatchQueue.main.async {
                                responseText = result
                            }
                        } catch {
                            DispatchQueue.main.async {
                                responseText = "Error: \(error.localizedDescription)"
                            }
                        }
                    }
                }
        }
    }
}
